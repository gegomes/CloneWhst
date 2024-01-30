import styled from "styled-components";


interface ChatListItemProps {
    active?: boolean;
  }

export const ChatListItem = styled.div<ChatListItemProps>`
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 5rem;
    padding-left: 1rem;
    max-height: 400px;

    /* Adiciona estilo condicional para a propriedade 'active' */
  background-color: ${(props) => (props.active ? props.theme.Cores.UserActiveListMessage : 'transparent')};

  &:hover {
    background-color: ${(props) => props.theme.Cores.ListUserHover};
  }
`;


export const ChatlistItemLines = styled.div`

    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-bottom: 1px solid  ${(props)=> props.theme.Cores.BottonBorderMessage};
    padding-right:0.485rem ;
    margin-left: 0.485rem;

    flex-wrap: wrap;
    min-width: 0;



`;
export const ChatlistItemLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ChatlistItemName = styled.div`
    font-size: 1.2rem;
    color: ${(props)=> props.theme.Cores.text};
`;

export const ChatlistItemDate = styled.div`
     font-size: 0.6rem;
    color: ${(props)=> props.theme.Cores.DataColor};
`;

export const ChatlistItemLastmessage = styled.div`
    font-size: 0.785rem;
    color: ${(props)=> props.theme.Cores.DataColor};
    display: flex;
    width: 100%;
    p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;

    }

`;


