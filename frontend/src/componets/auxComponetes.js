import styled from "styled-components";

export const HeaderTop = styled.div`
    height: 65px;
    border:1px solid red;
    position:fixed;
    top:0px;
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:10px;
    background-color:#ffff;
`;

export const Textbox = styled.textarea`
    width: 890px;
    height: 100px;
    padding:10px;
    font-size:16px;
`;

export const Button = styled.button`
    text-align:center;
    margin-top:10px;
    border: 1px solid black; 
    width:83px;
    height: 30px;
    padding:10px;
    background-color:#ffff;
    border-radius: 15px ;
`;

export const Button2 = styled(Button)`
    background-color: rgb(222, 124, 0)
`;

export const Title = styled.h1`
    font-size:26px;
`;