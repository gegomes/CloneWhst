import { ArrowBack } from "react-ionicons";
import styled from "styled-components";

interface PropsScreenChat {
    show?: boolean
}

export const NewChatContainer = styled.div<PropsScreenChat>`
    width: 35%;
    max-width: 30rem;
    min-width: 25rem;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.Cores.BackgroundColorNewChat};
    display: flex;
    flex-direction: column;
    border-right: 1px  solid  ${({ theme }) => theme.Cores.BorderNewChat};
    transition: all ease 0.5s;

    left:  ${(props) => props.show ? 0 : -415};
`;

export const NewChatHead = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.Cores.BackgroundNewChatHead};
    align-items: center;
    padding: 5rem 0.875rem 0.875rem 0.875rem;
`;

export const NewChatBackButton = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const IconArrowBack = styled(ArrowBack)`
   
    color: ${({ theme }) => theme.Cores.IconNewChat};
`;


export const NewChatMessage = styled.div`
    font-size: 1rem;
    height: 4rem;
    line-height: 4rem;
    flex: 1;
    font-weight: bold;
    color: ${({ theme }) => theme.Cores.ColorNewChatMessage};

`;

export const NewChatList = styled.div`
    flex: 1;
    overflow-y: auto;

    /* Estilizar a barra de rolagem */
&::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */
}

&::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.Cores.ColorScroBar}; /* Cor do indicador da barra de rolagem */
  border-radius: 4px; /* Borda arredondada do indicador */
}
:hover{
        background-color: ${({theme}) => theme.Cores.ListUserHover}
    }
`;

export const NewChatItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    padding-left: 2rem;
    cursor: pointer;
`;

