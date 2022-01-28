import { ContainerCard, DescriptionCard, ImgCard, TitleCard } from "./styled";
import { useContext } from "react";
import { ListContext } from "../../providers/ListProvider";

export default function Card(props){
    const { lista, setLista} = useContext(ListContext)
    const eliminar = ()=>{
       console.log(lista)
       setLista(lista.filter((item)=> item.id != props.i))

    }
    
    return(

        <ContainerCard>
            <ImgCard src={props.img} alt='img' />
            <TitleCard>{props.title}</TitleCard>
            <DescriptionCard>{props.description}</DescriptionCard>
            <button type="button" onClick={eliminar}>excluir</button>

        </ContainerCard>
    )
}