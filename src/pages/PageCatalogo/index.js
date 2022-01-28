import { useContext} from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { ContainerCatalogoLista, ContainerForms } from "./styled";
import { ListContext } from "../../providers/ListProvider";

export default function PageCatalago(){
    const {lista,filteredData, filter, setFilter} = useContext(ListContext)
   

    return(
        <div>
            <Header />
             <ContainerForms>
             <h1>Bucas</h1>
            <input type='text' value={filter} onChange={(ev)=> setFilter(ev.target.value)} />
                    
            </ContainerForms>

            <ContainerCatalogoLista>
            {(filter ? filteredData : lista).map((item)=>(
                <Card key={item.name}  img={item.image_url} i={item.id} description={item.description} title={item.name} />
            ))}

            </ContainerCatalogoLista>

            
        </div>
    )
}