
import {
    DateMessage,
    MensagerLine,
    MessagerItem,
    MessagerText
} from "./styled";
import { formatTime } from "../../Function/formatData";


interface ProsDataMensager {
    data: PropsData
    user: PropsUsaer
}

interface PropsData {
    body: string
    author: string,
    date: string
    type: string

}

interface PropsUsaer {
    id: string
    name: string,
    avatar: string
}



export function MessageGetItem({ data, user }: ProsDataMensager) {

    return (
        <MensagerLine
            // controlar lado da mensagem usario principar com usario secundario
            DataPositio={data.author}
            userPosition={user.id}
        >
            <MessagerItem
                // controlar lado da mensagem usario principar com usario secundario
                DataPositioBackground={data.author}
                userPositionBackground={user.id}
            >
                <MessagerText>{data.body}</MessagerText>
                <DateMessage>{formatTime(data.date)}</DateMessage>
            </MessagerItem>
        </MensagerLine>
    );
}
