import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import PageCadastro from '../../pages/PageCadastro'
import PageCatalago from '../../pages/PageCatalogo'



export default function AppRouter (){
    return(
        <Router>
            <Routes>
                <Route path='/'  element={<PageCatalago />} />
                <Route path='/cadastro' element={<PageCadastro/>} />

            </Routes>
        </Router>
        
    )
}