import { AttachFile, InsertEmoticon, MoreVert, Search, Close, Send, Mic } from "@material-ui/icons";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";

interface PropsIconEmojiPicker {
    onEmojiClick: (emoji: string) => void;

}


interface EmojiPickerContainerProps {
    emojiOpen: boolean;
}


export const ChatWindowsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ChatHeader = styled.header`
    height: 4rem;
    border-bottom: 1px solid  ${(props) => props.theme.Cores.colorChatWindowsHeaderBorder};
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const ChatHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.3rem;

`;
export const ChatHeaderIcon = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 0.785rem;

`;

export const ChatButtomIcon = styled.div`
    width: 3rem;
    height: 3rem;
    border: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    transition: all ease 0.3s;
`;

export const IconSearch = styled(Search)`
    color: ${(props) => props.theme.Cores.icon};
`;

export const IconAttachFile = styled(AttachFile)`
    color: ${(props) => props.theme.Cores.icon};
`;

export const IconMoreVert = styled(MoreVert)`
    color: ${(props) => props.theme.Cores.icon};
`;

export const ChatBody = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: ${(props) => props.theme.Cores.ColorBackgroundWindowsBody};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1.5rem 2.5rem;

    &::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */
}

&::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.Cores.ColorScroBar}; /* Cor do indicador da barra de rolagem */
  border-radius: 4px; /* Borda arredondada do indicador */
}

`;



export const ChatWindowsEmojiArea = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
 
  transition: transform 0.2s ease;
`;


export const StyledEmojiPickerContainer = styled.div<EmojiPickerContainerProps>`
    display: ${(props) => (props.emojiOpen ? 'block' : 'none')};
 
    z-index: 1; /* Mantenha o z-index necessário quando visível */
    width: auto;
  `;


export const IconEmojiPicker = styled(EmojiPicker).attrs({
    width: 'auto',
    height: '22rem',
    searchDisabled: true,
    skinTonesDisabled: true,
    disableSearch: true,
    disableSeachBar: true,
    disableSkinTonePicker: true,


}) <PropsIconEmojiPicker>`
    color: ${(props) => props.theme.Cores.icon};
`;


export const ChatFooter = styled.footer`
   height: 3.5rem;
    display: flex;
    align-items: center;

`;

export const ChatWindowsPre = styled.div`
    display: flex;
    margin: 0 0.785rem;

`;



export const ChatWindowsInputArea = styled.div`
    flex: 1;


`;


export const Input = styled.input.attrs({
    placeholder: 'Digite uma mensagem',
    type: 'text',
})`
    width: 100%;
    height: 2.5rem;
    border: 0;
    outline: 0;
    background: ${(props) => props.theme.Cores.ColorFillMessage};
    border-radius: 20px;
    font-size: 1rem;
    color: ${(props) => props.theme.Cores.ColorFillMessageText};
    padding-left: 0.785rem;

`;


export const ChatWindowsPos = styled.div`
    display: flex;
    margin: 0 0.785rem;

`;


export const IconInsertEmoticon = styled(InsertEmoticon).attrs<EmojiPickerContainerProps>((props) => ({
    style: {
        color: props.emojiOpen ? props.theme.Cores.colorEmojiOpen : props.theme.Cores.icon,
    },
})) <EmojiPickerContainerProps>`
  `;


export const IconClose = styled(Close)`
    color: ${(props) => props.theme.Cores.icon};
`;


export const IconSend = styled(Send)`
    color: ${(props) => props.theme.Cores.icon};
`;

export const IconMic = styled(Mic)`
    color: ${(props) => props.theme.Cores.icon};
`;
