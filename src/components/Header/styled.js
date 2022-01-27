import { Link } from "react-router-dom";
import styled from "styled-components";


export const ContainerHeader= styled.main`
    width: 100%;
    padding: 10px 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #87BBA2;
    
`;

export const ImgAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 20px;
`;
export const ListaLink = styled.ul`
    display: flex;

    li{
        margin-right: 25px;

    }
    li:last-child{
        color:red;
        margin-right: 0;
    }
  
`
export const LinkRouter = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    color: #000000;
    &:hover{
        border-bottom: 2px solid black;
    }
`;