import './navigation.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navigation = () => {
    return ( 
        <nav id='navegacao'>
            <div className='container d-flex justify-content-between align-items-center h-100'>
                <div id='logo-box'>
                    <a href="/" className='d-flex align-items-center justify-content-center'>
                        <img src="/logo.png" alt="" width='60'/>
                        <h4 className='text-light mt-2 p-3 font-weight-bold'>MãoNaObra</h4>
                    </a>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <Link to="/login" id='login'>Login</Link>
                    <Link to="/cadastro/suasInformacoes" id='cadastro'>Criar conta</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;