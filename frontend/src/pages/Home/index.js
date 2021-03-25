import React from 'react'
import styled from 'styled-components'
import Header from '../../componets/header'
import Main from '../../componets/main'
import foto from '../../img/teste.jpg'

import {Button, Button2, HeaderTop, Textbox, Title} from '../../componets/auxComponetes'

export default function Home(){

    const User = {
        nome : "K16bits"
    }

    return(
        <>
        <HeaderTop>
            <Button>Login</Button>
            <Title>Curious</Title>
            <Button2>Register</Button2>
        </HeaderTop>
        <Main>
            <Header>
                <Profile>
                        <img src={foto} alt="profile"></img>
                </Profile>
                <h1>{User.nome}</h1>
            </Header>
            <Textbox placeholder="Pergunte algo"></Textbox>
        </Main>
        </>
    )
}


const Profile = styled.div`
    img{
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
`;