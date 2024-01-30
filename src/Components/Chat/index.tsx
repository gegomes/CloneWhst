import { Avatar } from "../Avatar";

import { ContainerChat } from "./styled";

export function ChatMessage(){
    return (
        <ContainerChat>
                <Avatar 
                    name="Geinian Gomes" 
                    imageUrl="https://github.com/gegomes.png"
                />
        </ContainerChat>
    )
}