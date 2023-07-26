import './NavegationCadastro.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../../../public/logo.png'


function NavegationCadastro() {
    return (
        <div id='side-bar' className='d-flex align-items-center flex-column justify-content-around'>
            <div id='logo-box'>
                <Link to="/"><img src={Logo} alt="" width={120} /></Link> 
            </div>
            
            <div id='navegation-box' className='mb-4'>
                <NavLink to="/cadastro/suasInformacoes" activeClassName='selected'>
                    <li className='d-flex align-items-center'>
                        <div className='step-number' id='1'>1</div>
                        <div className='step-info'><div className='step-info-number'>Primeiro Passo</div>Suas informações</div>
                    </li>
                </NavLink>

                <NavLink to="/cadastro/dadosPessoais" activeClassName='selected'>
                <li className='d-flex align-items-center my-4'>
                    <div className='step-number'>2</div>
                    <div className='step-info'><div className='step-info-number'>Segundo Passo</div>Dados pessoais</div>
                </li>
                </NavLink>


                <NavLink to="/cadastro/TipoCadastro" activeClassName='selected'>
                <li className='d-flex align-items-center'>
                    <div className='step-number'>3</div>
                    <div className='step-info'><div className='step-info-number'>Terceiro Passo</div>Tipo de cadastro</div>
                </li>
                </NavLink>
            </div>
            <div></div>
        </div>
    );
}

export default NavegationCadastro;