import styled from 'styled-components';

export const Card = styled.div`
    border: 1px solid red;
    height: 205px;
    width: 100%;
    margin-bottom:10px;
    background-color:rgb(255, 255, 255);
`;

export const SubCard = styled.div`
    height: 44px;
    width:870;
    display:flex;
    flex-direction:row;
    align-items:center;

    img{
        height:36px;
        width:36px;
        border-radius:50%;
        margin:5px;
    }
`;