import React, { useEffect, useState } from 'react'
import api from '../../services/axios'


import styled from 'styled-components'
import Main from '../../componets/main'
import foto from '../../img/teste.jpg'


import {ColumnInfo, Header,SubHeader} from '../../componets/header'
import {Button, Button2,Button3, HeaderTop, Subtext, Textbox, Title} from '../../componets/auxComponetes'
import { Card, SubCard } from '../../componets/card'

export default function Home(){

    const User = {
        nome : "K16bits"
    }

    const [question,Setquestion] = useState('');

    async function Handleform(e){
        e.preventDefault();
        console.log(question)
        try{
            await api.post("/storequestion",{"questions":question})
        }catch(e){
            console.log(e)
        }
    }


    const [dados,Setdados] = useState([])

    async function getdata(){
        const response = await api.get("/showquestion");
        Setdados(response.data);
    }

    useEffect(()=>{
        getdata()
    },[])

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
            <form onSubmit={Handleform}>
                <Textbox placeholder="Pergunte algo"
                value={question}
                onChange={e => Setquestion(e.target.value)}
                ></Textbox>
                <Button3 type='submit' onChange={e => Setquestion(e.target.value)}
                onSubmit={Handleform}
                >Enviar</Button3>
            </form>
            {
                dados.map(dado =>(
                    <Card key={dado._id}>
                        <SubCard>
                            <img src={foto} alt="profileMin"></img>
                        </SubCard>
                            <Subtext> {dado.questions}</Subtext>
                    </Card>
                ))
            }
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