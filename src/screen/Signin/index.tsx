
import { Buttom, Container, IconLogGoogle } from './styled';

import GooglSvgLogo from '../../assets/google-logo.svg'


import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import {AuthGoogleContext } from './../../Context/AuthContext';



export const Signin =  () => {
 
    const { login, user } = useContext(AuthGoogleContext);

    async function handleLoginGoogle(){
       await login()
    }
  
    if(!user){
        return (
            <Container>
                <h1>Acesse sua conta do Whatsapp</h1>
                <p> Autenticação  social</p>
                <Buttom type="button" onClick={handleLoginGoogle} >
                    <IconLogGoogle src={GooglSvgLogo} alt=" logo" />
                    Entrar com o Google
                </Buttom>
            </Container>
        )
    }else{
        return <Navigate to="/dashboard"/>
    }
}

