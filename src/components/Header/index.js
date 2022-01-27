import { Link } from "react-router-dom";
import { ContainerHeader, ImgAvatar, LinkRouter, ListaLink } from "./styled";
import Avatar from '../../assets/img/avatar2.jpg'

export default function Header(){
    return(
        <ContainerHeader>
            <ImgAvatar src={Avatar} alt="Imagem Avatar" />

            <nav>
                <ListaLink>
                    <li><LinkRouter to="/">Listagem</LinkRouter></li>
                    <li><LinkRouter to="/cadastro">cadastro</LinkRouter></li>
                </ListaLink>
            </nav>
        </ContainerHeader>
    )
}