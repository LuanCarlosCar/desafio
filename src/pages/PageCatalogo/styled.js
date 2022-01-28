import styled from "styled-components";

export const ContainerCatalogo = styled.main`

`;
export const ContainerCatalogoLista= styled.div`
    width: 70%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    @media (max-width: 1100px){
        grid-template-columns: 1fr 1fr;
        
    }
    
    @media (max-width: 412px){
        grid-template-columns: 1fr;
        
    }
    
`;
export const ContainerForms =styled.div`
    text-align: center;
    h1{
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
    input{
        width: 20rem;
        margin-bottom: 10px;
        height: 1.5rem;
        border: 2px solid red;
        font-size: 0.9rem;

    }
   
`;
