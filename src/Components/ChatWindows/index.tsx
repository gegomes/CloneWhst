import { RefObject, useEffect, useRef, useState } from "react";
import { Avatar } from "../Avatar";
import {
    ChatWindowsContainer,
    ChatBody,
    ChatButtomIcon,
    ChatFooter,
    ChatHeader,
    ChatHeaderIcon,
    ChatHeaderInfo,
    IconAttachFile,
    IconMoreVert,
    IconSearch,
    ChatWindowsPre,
    IconInsertEmoticon,
    ChatWindowsInputArea,
    ChatWindowsPos,
    IconMic,
    Input,
    IconClose,
    StyledEmojiPickerContainer,
    IconSend,

} from "./styled";
import { MessageGetItem } from "../MessageItem/index.tsx";
import { OnChatContent, SendMessage } from "../../sevices/firebase.ts";

interface PropsData {
    title: string 
    image: string
    chatId: string 
}

interface PropsUsaer {
    id: string
    name: string,
    avatar: string
}


interface propsUserData {
    user: PropsUsaer
    data: PropsData

}


interface PropsList{
    author: string
    body: string
    type: string
    date: string
}

// interface EmojiEvent extends React.MouseEvent<HTMLButtonElement> {
//     emoji: string;
// }
type BodyRef = RefObject<HTMLDivElement>;


export function ChatWindows({user, data}:propsUserData) {


    const body: BodyRef = useRef<HTMLDivElement>(null)

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')

    const [list, setList] = useState<PropsList[] | null>([])

    const [userList, setUsersList] = useState<string[]>([])
    console.log(userList);
    
    useEffect(() => {
        if (body && body.current && body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, []);
  

    useEffect(() => {
        setList([])
     const onMon = OnChatContent(data.chatId, setList, setUsersList)
     return onMon
     
    }, [data.chatId]);

    function handleCloseEmoji() {
        setEmojiOpen(false)
    }

    // const handleEmojiClick = (e:EmojiEvent) => {
    //     console.log(e,'lll');
        
    //     setText(text + e.emoji)
    
    // }

    const handleToggleEmojiPicker = () => {

    };

    const handleMicClick = () => {

    };


    const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            handleSendClick();
        }
    }
    

    const handleSendClick = () => {
        if(text !== ''){
            SendMessage(data, user.id, 'text', text)
            setText('')
            setEmojiOpen(false)
        }
    };
    return (
        <ChatWindowsContainer>
            <ChatHeader>
                <ChatHeaderInfo>
                    <Avatar
                        name={data.title}
                        imageUrl={data.image}
                    />
                </ChatHeaderInfo>
                <ChatHeaderIcon>
                    <ChatButtomIcon>
                        <IconSearch />
                    </ChatButtomIcon>

                    <ChatButtomIcon>
                        <IconAttachFile />
                    </ChatButtomIcon>

                    <ChatButtomIcon>
                        <IconMoreVert />
                    </ChatButtomIcon>

                </ChatHeaderIcon>
            </ChatHeader>
            <ChatBody 
                ref={body} 
            >
                {
                    list?.map((item, key) => (
                        <MessageGetItem
                            key={key}
                            data={item}
                            user={user}
                        />
                    ))
                }
            </ChatBody>
            <StyledEmojiPickerContainer
                emojiOpen={emojiOpen}>
                {/* <IconEmojiPicker
                    onEmojiClick={handleEmojiClick}
                /> */}
            </StyledEmojiPickerContainer>

            <ChatFooter>

                <ChatWindowsPre>
                    <ChatButtomIcon
                        style={{ width: emojiOpen ? 40 : 0 }}
                        onClick={handleCloseEmoji}
                    >
                        <IconClose />
                    </ChatButtomIcon>


                    <ChatButtomIcon
                        onClick={handleToggleEmojiPicker}
                    >
                        <IconInsertEmoticon
                            emojiOpen={emojiOpen}
                        />
                    </ChatButtomIcon>


                </ChatWindowsPre>

                <ChatWindowsInputArea>
                    <Input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}

                    />
                </ChatWindowsInputArea>

                <ChatWindowsPos>
                    {
                        // sem implemetação da funcionalidade
                        text === '' &&
                        <ChatButtomIcon onClick={handleMicClick}>
                            <IconMic />
                        </ChatButtomIcon>
                    }
                    {
                        text !== '' &&
                        <ChatButtomIcon onClick={handleSendClick}>
                            <IconSend />
                        </ChatButtomIcon>
                    }

                </ChatWindowsPos>
            </ChatFooter>
        </ChatWindowsContainer>
    )
}

