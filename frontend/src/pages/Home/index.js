import React from 'react'
import styled from 'styled-components'
import Main from '../../componets/main'
import foto from '../../img/teste.jpg'


import {ColumnInfo, Header,SubHeader} from '../../componets/header'
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
                <TitleMain>{User.nome}</TitleMain>
                <SubHeader>
                    <ColumnInfo>
                        <h5>10</h5>
                        <h4>Seguidores</h4>
                    </ColumnInfo>
                    <ColumnInfo>
                        <h5>5</h5>
                        <h4>Answers</h4>
                    </ColumnInfo>
                    <ColumnInfo>
                        <h5>5</h5>
                        <h4>Seguindo</h4>
                    </ColumnInfo>
                </SubHeader>
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
        border:3px solid white;
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
`;

const TitleMain = styled.div`
    font-size:26px;
    width:100%;
    background-color:#ffff;
`;