import { Avatar } from "../Avatar";
import { ChatListItem, ChatlistItemDate, ChatlistItemLastmessage, ChatlistItemLine, ChatlistItemLines, ChatlistItemName } from "./styled";
import { formatTime } from "../../Function/formatData";

interface ChatData {
    title: string;
    image: string;
    lastMessage: string;
    lastMessageData: string
}

interface PropsList {
    onClick: () => void;
    active: boolean;
    data: ChatData; 
}


export function ChatlistItem({ onClick, active, data, ...rest }: PropsList) {

    return (
        <ChatListItem
            active={active}
            {...rest}
            onClick={onClick}
        >
            <Avatar imageUrl={data.image} />
            <ChatlistItemLines>
                <ChatlistItemLine>
                    <ChatlistItemName>{data.title}</ChatlistItemName>
                    <ChatlistItemDate>{formatTime(data.lastMessageData)}</ChatlistItemDate>
                </ChatlistItemLine>
                <ChatlistItemLine>
                    <ChatlistItemLastmessage>
                        <p>{data.lastMessage}</p>
                    </ChatlistItemLastmessage>
                </ChatlistItemLine>
            </ChatlistItemLines>
        </ChatListItem>
    );
}
