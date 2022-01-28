import axios from 'axios'
import { createContext, useEffect, useState } from 'react'


export const  ListContext = createContext({})
export const ListProvider = (props) =>{
    const [lista, setLista] = useState([])
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const api = axios.create({
            baseURL: "https://api.punkapi.com/v2",
          });
        api.get('/beers').then((response) => setLista(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
      const filteredData = Object.values(lista).filter(function(obj) { return obj.name.toLowerCase().includes(filter.toLowerCase())});// lista.filter(function(obj) { return obj.name.toLowerCase().includes(filter.toLowerCase())});


    return(
        <ListContext.Provider value={{lista, setLista, filteredData, filter, setFilter}}>
            {props.children}
        </ListContext.Provider>
    )
}