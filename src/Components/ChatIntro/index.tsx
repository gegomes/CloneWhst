import { ChatIntroContainer } from "./styled";

import imagemintrodWhatsApp from '../../assets/imagemintrodWhatsApp.png'
export function ChatIntro(){

    return(
        <ChatIntroContainer>
            <img src={imagemintrodWhatsApp} alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2> 
                O WhatsApp conecta ao seu telefone para sicronizar suas mensagens.
                Para reduzir o uso de dados , conecte seu telefone a uma rede WI-Fi.
           </h2>

        </ChatIntroContainer>
    )
}