import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, addDoc, QueryDocumentSnapshot,
    DocumentData, getDocs, DocumentReference, updateDoc, arrayUnion, doc, getDoc,
    setDoc, onSnapshot, CollectionReference, query, where, DocumentSnapshot, Firestore
} from 'firebase/firestore';


import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';

const firebaseConfig = {
    apiKey: "AIzaSyBpC4ZzPr7mCDMDona4MDrTBSXz8cA3YqI",
    authDomain: "whatsappclone-a2278.firebaseapp.com",
    projectId: "whatsappclone-a2278",
    storageBucket: "whatsappclone-a2278.appspot.com",
    messagingSenderId: "564136346625",
    appId: "1:564136346625:web:146f58b945ecaece10ec00"
};


export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

interface User {
    id: string;
    name: string;
    avatar: string;
}
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        // Armazenar o token e os dados do usuário na sessão
            sessionStorage.setItem('@Auth:user', JSON.stringify(result.user))
        // Retornar o resultado para que possa ser utilizado pela função que chama signInWithGoogle
        return result;
    } catch (error) {
        // Se ocorrer um erro, registrar no console
        console.error('Erro ao fazer login com o Google:', error);
        // Retornar null em caso de erro
        return null;
    }
};


export async function AddUser(u: User): Promise<string | void> {
    try {
        // Verificar se o usuário já existe na coleção 'Users'
        const userQuery: CollectionReference = collection(db, 'Users');
        const userSnapshot = await getDocs(query(userQuery, where('name', '==', u.name)));
        if (!userSnapshot.empty) {
            console.log('O usuário já existe na coleção.');
            return; // Não adicionar o usuário se ele já existir
        }

        // Adicionar o novo usuário à coleção 'Users'
        const docRef: DocumentReference = await addDoc(userQuery, {
            name: u.name,
            avatar: u.avatar
        });
        console.log('Usuário adicionado com sucesso! Document ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
    }
}

export async function GetCollectionData(): Promise<User[]> {
    try {
        const currentUserID = 'oUchajH9BcpBjXD4lzCt'; // estatico  id user
        const querySnapshot = await getDocs(collection(db, 'users'));

        const dataList: UserDataAdd[] = [];
        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
            // Verifique se o ID do documento não é igual ao ID do usuário logado
            if (doc.id !== currentUserID) {
                dataList.push({ id: doc.id, ...doc.data() } as UserDataAdd);
            }
        });

        return dataList;
    } catch (error) {
        console.error('Erro ao buscar dados da coleção:', error);
        return [];
    }
}

interface UserData {

    user: User;
    user2: User;
}

export async function AddNewChat({ user, user2 }: UserData) {
    try {
        // Consultar a coleção de chats para ver se já existe um chat entre os usuários
        const chatQuerySnapshot = await getDocs(
            query(
                collection(db, 'chats'),
                where('users', '==', [user.id, user2.id]) // Verifica se os usuários estão na lista de usuários do chat
            )
        );

        // Se já existe um chat entre os usuários, não adicionar um novo chat
        if (!chatQuerySnapshot.empty) {
            console.log('Já existe um chat entre os usuários.');
            return;
        }

        // Adicionar um novo documento à coleção 'chats' com os dados do novo chat
        const newChatRef = await addDoc(collection(db, 'chats'), {
            messages: [],
            users: [user.id, user2.id]
        });
        const newChatId = newChatRef.id;

        // Atualizar os documentos 'users' dos usuários para adicionar o novo chat
        await Promise.all([
            updateChatForUser(user, user2, newChatId, user2.name, user2.avatar),
            updateChatForUser(user2, user, newChatId, user.name, user.avatar)
        ]);

        console.log('Novo chat adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar novo chat:', error);
    }
}


async function updateChatForUser(user: User, otherUser: User, newChatId: string, otherUserName: string, otherUserAvatar: string) {
    const userDocRef = doc(db, 'users', user.id);
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
        await updateDoc(userDocRef, {
            chats: arrayUnion({
                chatId: newChatId,
                title: otherUserName,
                image: otherUserAvatar,
                with: otherUser.id
            })
        });
    } else {
        await setDoc(userDocRef, {
            chats: [{
                chatId: newChatId,
                title: otherUserName,
                image: otherUserAvatar,
                with: otherUser.id
            }]
        });
    }
}

// monitorar chat 

interface ChatItem {
    data: Chat
}

interface Chat{
    chats: string

}


type UnsubscribeFunction = () => void;

export function OnChatMonitor(userId: string, setList: React.Dispatch<React.SetStateAction<ChatItem[]>>): UnsubscribeFunction {
    console.log(userId, 'userid');

    return onSnapshot(doc(db, 'users', userId), (docSnapshot) => {
        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            if (data.chats) {
                setList(data.chats);
            }
        }
    });
}



interface Message {
    // Defina aqui a estrutura da mensagem
    // Por exemplo:
    id: string;
    text: string;
    sender: string;
    timestamp: number;
}

export function OnChatContent(chatId: string, setList: (messages: Message[]) => void, setUsersList: (users: string[]) => void): () => void {
    return onSnapshot(doc(db, 'chats', chatId), (docSnapshot: DocumentSnapshot<DocumentData>) => {
        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setList(data.messages);
            setUsersList(data.users);
        }
    });
}

interface ChatData {
    chatId: string;
}

interface Message {
    type: string;
    author: string;
    body: string;
    date: string;
}


interface PropsChat {
    chatId: string;
    lastMessage: string;
    lastMessageData: string;
}

export async function SendMessage(chatData: ChatData, userId: string, type: string, body: string) {
    const newDate = new Date();
    const now = newDate.toISOString();
    const message = {
        type,
        author: userId,
        body,
        date: now
    };
    try {
        // Atualiza o último mensagem e data nas informações de chat dos usuários
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const userUpdates: Promise<void>[] = [];
        usersSnapshot.forEach(userDoc => {
            const userData = userDoc.data();
            if (userData && userData.chats) {
                const updatedChats = userData.chats.map((chat: PropsChat) => {
                    if (chat.chatId === chatData.chatId) {
                        chat.lastMessage = body;
                        chat.lastMessageData = now;
                    }
                    return chat;
                });
                userUpdates.push(updateDoc(doc(db, 'users', userDoc.id), { chats: updatedChats }));
            }
        });
        await Promise.all(userUpdates);

        // Adiciona a mensagem ao chat
        await updateDoc(doc(db, 'chats', chatData.chatId), {
            messages: arrayUnion(message)
        });
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
    }
}
