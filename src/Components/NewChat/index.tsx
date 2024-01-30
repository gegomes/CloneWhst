import { useEffect, useState } from "react";
import { IconArrowBack, NewChatBackButton, NewChatContainer, NewChatHead, NewChatItem, NewChatList, NewChatMessage } from "./styles";
import { Avatar } from "../Avatar";
import { AddNewChat, GetCollectionData } from "../../sevices/firebase";

interface User {
    id: string;
    avatar: string;
    name: string;
}

interface ListItem {
    id: string;
    avatar: string;
    name: string;
}

interface Props {
    user: User | null;
    chatList: List
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}


interface List {

    title: string;
    image: string;
    lastMessage: string;
    lastMessageData: string
}


export function NewChat({user, chatList, show, setShow }: Props) {

    console.log(chatList,'chatList' );
    
    const [list, setList] = useState<ListItem[]>([]);

    useEffect(()=> {
        const getList = async () => {
            if(user !== null){
                const result = await GetCollectionData();
                setList(result);
            }
        };
        getList();
    }, [user]);

    function handleClose() {
        setShow(false);
    }

    async function addNewClickUser(user2:any) {
        await AddNewChat(user2);
        handleClose();
    }

    return (
        <NewChatContainer style={{ left: show ? 0 : -600 }}>
            <NewChatHead>
                <NewChatBackButton onClick={handleClose}>
                    <IconArrowBack />
                </NewChatBackButton>
                <NewChatMessage>Nova Conversa</NewChatMessage>
            </NewChatHead>
            <NewChatList>
                {list.map((item, key) => (
                    <NewChatItem onClick={() => addNewClickUser(item.id)} key={key}>
                        <Avatar imageUrl={item.avatar} name={item.name} />
                    </NewChatItem>
                ))}
            </NewChatList>
        </NewChatContainer>
    );
}
