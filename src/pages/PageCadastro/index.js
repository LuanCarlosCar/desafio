import { useContext, useState } from "react";
import Header from "../../components/Header";
import { ListContext } from "../../providers/ListProvider";
import { ContainerCadastro, ContainerFormosCadastro } from "./styled";
import { useNavigate } from 'react-router-dom';
import bebidas from '../../assets/img/bebidas.jpg'
import { v4 } from "uuid";
const valuesInicial ={
    id: v4(),
    name: '',
    description: '',
    image_url: bebidas
}
export default function PageCadastro(){
    const [values, setValues] = useState(valuesInicial)
    const {lista, setLista} = useContext(ListContext)

    const history = useNavigate();
   
     const dadosChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
     };

     const handleSubmit = (event)=> {
        event.preventDefault();
        history("/");
        setLista([...lista,values])
      }

    return(
        <ContainerCadastro>
            <Header />
                <ContainerFormosCadastro>
                    <h1>Cadastro</h1>
                    <form onSubmit={handleSubmit}>
                    <label>
                    Name:
                    <input type='text'name="name" value={values.name} onChange={dadosChange} />
                    </label>
                    <label>
                    Descrição:
                    <input type='text' name="description" value={values.description} onChange={dadosChange} />
                    </label>
    
                    <button type="submit">Salvar</button>
                    </form>

                </ContainerFormosCadastro>
                
       

        </ContainerCadastro>
        
    )
}


