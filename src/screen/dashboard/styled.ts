import styled from "styled-components";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SearchIcon from '@material-ui/icons/Search';




export const Container = styled.div`
     display: flex;
     height: 100vh;
   
`;

export const Sidebar = styled.div`
     width: 35%;
     max-width: 30rem;
     min-width: 25rem;
     display: flex;
     
     border-right: 1px solid #DDD;
     flex-direction: column;
     background-color: ${(props) => props.theme.Cores.BackgroundSidebar};
          
`;

export const Header = styled.div`
     height: 4rem;
     display: flex;
     justify-content: space-between;
     align-items: center;  
     padding: 0 1rem;
`;

export const HeaderButtons = styled.button`
     display: flex;
     border: none;
     justify-content: space-between;
     align-items: center;
     width: 30%;
     
`;


export const StyledIconButton = styled.div`
     width: 1000%;
     border-radius: 2px;
     display: flex;
     justify-content: space-around;
     cursor: pointer;
`;


export const StyledDonutIcon = styled(DonutLargeIcon)`
    color: ${(props) => props.theme.Cores.icon};
     
`;

export const StyledChatIcon = styled(ChatIcon)`
    color: ${(props) => props.theme.Cores.icon};
  
`;

export const StyledMoreVertIcon = styled(MoreVertIcon)`
    color: ${(props) => props.theme.Cores.icon};
  
`;


export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.785rem;
  background-color: ${(props)=> props.theme.Cores.searchBackground};
  border-radius:20px ;

  padding: 0 0.785rem;
`;


export const Icon = styled(SearchIcon)`
     font-size: 2rem ;
     margin-right: 8px;
    color: ${(props) => props.theme.Cores.icon};


`;

export const Input = styled.input.attrs(
     {
          type: "search",
          placeholder: "procurar ou comecar uma nova",
     },
)`

    border: 0;
    outline: 0;
    width: 100%;
    padding: 0.5rem;
    flex: 1;
    background-color: transparent;
    margin-left:0.5rem;
`;

export const ChatList = styled.div`
     flex: 1;
     background-color: ${(props)=> props.theme.Cores.BackgroundMessageList};
     overflow-y: auto;
     margin-top: 0.2rem;
     overflow-y: auto; /* Habilitar rolagem vertical */

/* Estilizar a barra de rolagem */
&::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */
}

&::-webkit-scrollbar-thumb {
  background-color: ${(props)=> props.theme.Cores.ColorScroBar}; /* Cor do indicador da barra de rolagem */
  border-radius: 4px; /* Borda arredondada do indicador */
}

`;


export const ContentArea = styled.div`

     flex: 1;
`;