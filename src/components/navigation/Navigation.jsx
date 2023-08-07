import './navigation.css'
import {useContext} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../../../context/userContext';

const Navigation = () => {

    const{authenticated, logout} = useContext(Context)

    return ( 
        <nav id='navegacao'>
            <div className='container d-flex justify-content-between align-items-center h-100'>
                <div id='logo-box'>
                    <Link to="/" className='d-flex align-items-center justify-content-center'>
                        <img src="/logo.png" alt="" width='60'/>
                        <h4 className='text-light mt-2 p-3 font-weight-bold'>MãoNaObra</h4>
                    </Link>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    {
                        authenticated ? 
                        ( 
                        <div>
                            <Link to="/profile"> <p>logado</p></Link>
                            <li onClick={logout}>Sair</li>
                        </div>
                        ) 
                        : 
                        (
                        <>
                            <Link to="/login" id='login'>Login</Link>
                            <Link to="/cadastro/suasInformacoes" id='cadastro'>Criar conta</Link> 
                        </>
                        )
                    }
                    
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;