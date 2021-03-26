import styled from 'styled-components'

import svg from '../img/Wavey-Fingerprint.svg'

export const Header = styled.div`
    width: 890px;
    height: 266px;

    text-align:center;
    margin-top:100px;
   
    background-image: url(${svg});
`;

export const SubHeader = styled.div`
    height:50px;
    width:100%;
    background-color:#ffff;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
    align-items:center;
`;

export const ColumnInfo = styled.div`
    display:flex;
    flex-direction:column;
`;