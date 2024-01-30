import { useEffect, useState } from "react";
import { Avatar } from "../../Components/Avatar";
import {
    ChatList,
    Container,
    ContentArea,
    Header,
    HeaderButtons,
    Icon,
    Input,
    SearchInput,
    Sidebar,
    StyledChatIcon,
    StyledDonutIcon,
    StyledIconButton,
    StyledMoreVertIcon
} from "./styled";
import { ChatlistItem } from "../../Components/ChatlistItem";
import { ChatIntro } from "../../Components/ChatIntro";
import { ChatWindows } from "../../Components/ChatWindows";
import { NewChat } from "../../Components/NewChat";
import { OnChatMonitor } from "../../sevices/firebase";


interface User {
    id: string;
    avatar: string;
    name: string;
}


interface ChatItem {
    chatId: string;
    image: string;
    lastMessage: string;
    lastMessageData: string;
    title: string;
    with: string;

}

export function Dashboard() {
    const [chatList, setChatList] = useState<[] | undefined >();
    const [activeChat, setActiveChat] = useState<ChatItem | undefined>(undefined);
    const [showNewChat, setShowNewChat] = useState(false);
    const [user, setUser] = useState<User>({
        id: 'oUchajH9BcpBjXD4lzCt',
        avatar: "https://github.com/gegomes.png",
        name: 'Geinian Gomes'
    });
    console.log(setUser, 'setuser');
     
    // const [user, setUser] = useState<User>()
useEffect(() => {
    if (user !== null) {
        const unsubscribe = OnChatMonitor(user.id, setChatList);
        return unsubscribe;
    }
}, [user])

function handleNewChat() {
    setShowNewChat(true);
}

return (
    <Container>
        <NewChat
            chatList={chatList}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}
        />
        <Sidebar>
            <Header>
                <Avatar imageUrl={user.avatar} />
                <HeaderButtons>
                    <StyledIconButton>
                        <StyledDonutIcon />
                        <StyledChatIcon onClick={handleNewChat} />
                        <StyledMoreVertIcon />
                    </StyledIconButton>
                </HeaderButtons>
            </Header>
            <SearchInput>
                <Icon />
                <Input />
            </SearchInput>
            <ChatList>
                {chatList?.map((item:ChatItem) => (
                    <ChatlistItem
                        data={item}
                        active={activeChat?.chatId === item.chatId}
                        key={item.chatId}
                        onClick={() => setActiveChat(item)}
                    />
                ))}
            </ChatList>
        </Sidebar>
        <ContentArea>
            {activeChat ? (
                <ChatWindows user={user} data={activeChat} />
            ) : (
                <ChatIntro />
            )}
        </ContentArea>
    </Container>
);
}
