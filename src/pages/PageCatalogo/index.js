import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { ContainerCatalogoLista } from "./styled";

export default function PageCatalago(){
    const [lista, setLista] = useState({
        image_url: '../../assets/img/avatar2.jpg',
        description: 'uahsuhaushauhsua',
        name: 'totosa'
    })
    const [filter, setFilter] = useState("");
    const imprimirLista = ()=>{
      fetch('https://api.punkapi.com/v2/beers').then( async(response)=>{
      const data = await response.json();
        setLista(data)
    })
    }
    
    useEffect(()=>{
        imprimirLista();

    },[])

    
    return(
        <div>
            <Header />
            <ContainerCatalogoLista>
            {lista.map((item)=>(
                <Card key={item.name} img={item.image_url} description={item.description} title={item.name} />
            ))}

            </ContainerCatalogoLista>

            
        </div>
    )
}