import React from 'react'
import styled from 'styled-components'
import Header from '../../componets/header'
import Main from '../../componets/main'
import foto from '../../img/teste.jpg'

import {Button, Button2, HeaderTop, Subtext, Textbox, Title} from '../../componets/auxComponetes'
import { Card, SubCard } from '../../componets/card'

export default function Home(){

    const User = {
        nome : "K16bits"
    }

    const DataMessage = {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phellus gravida dictum consequat.Pellentesque dictum aliquet metus",
        tempo: "dagorinha"
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
            <Card>
                <SubCard>
                    <img src={foto} alt="profileMin"></img>
                    <h3>{User.nome}</h3>
                </SubCard>
                    <Subtext> {DataMessage.texto}</Subtext>
            </Card>
            <Card>
                <SubCard>
                    <img src={foto} alt="profileMin"></img>
                </SubCard>
                    <Subtext> {DataMessage.texto}</Subtext>
            </Card>
            <Card>
                <SubCard>
                    <img src={foto} alt="profileMin"></img>
                </SubCard>
                    <Subtext> {DataMessage.texto}</Subtext>
            </Card>
            
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