import { ContainerCard, DescriptionCard, ImgCard, TitleCard } from "./styled";
import Avatar from '../../assets/img/avatar2.jpg'


export default function Card(props){
    
    return(

        <ContainerCard>
            <ImgCard src={props.img} alt='img' />
            <TitleCard>{props.title}</TitleCard>
            <DescriptionCard>{props.description}</DescriptionCard>

        </ContainerCard>
    )
}