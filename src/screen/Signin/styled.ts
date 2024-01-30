import styled from "styled-components";




export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex: 1;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.Cores.BackgroundLogin};

    h1{
        padding: 0;
        font-size: 30px;
        color: ${({theme}) => theme.Cores.text};
        font-weight: 400;
    }

    p{
        padding: 0;
        font-size: 16px;
        color: ${({theme}) => theme.Cores.text};
    }

`;


export const Buttom = styled.button`
    height: 4rem;
    width: 30rem;

    color: ${({theme}) => theme.Cores.ColorButtomLogin};

    margin-top: 3rem;
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 1rem solid transparent ;
    border-radius: 8px;

`;

export const IconLogGoogle = styled.img`
    width: 1.5rem;
    margin: 0.5rem;
    color: ${(props) => props.theme.Cores.icon};
`;