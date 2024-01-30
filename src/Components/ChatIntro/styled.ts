import styled from "styled-components";

  export const ChatIntroContainer = styled.div`
    
    background-color: ${(props) => props.theme.Cores.backgroundIntrod};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    border-bottom: 6px solid ${(props)=> props.theme.Cores.BarrabottomIntrod};

    img{
        width: 30rem;
        height: auto;
    }


    h1{
        font-size: 2rem;
        color: ${(props)=> props.theme.Cores.ColorIntrodH1};

        font-weight: normal;
        margin-top: 2rem;
    }

    h2{
        font-size: 1rem;
        color: ${(props)=> props.theme.Cores.ColorIntrodH2};
        font-weight: normal;
        margin-top: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
    }
  `;

