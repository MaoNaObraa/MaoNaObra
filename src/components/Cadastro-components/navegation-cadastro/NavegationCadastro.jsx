import './NavegationCadastro.css'
import { NavLink } from 'react-router-dom';


function NavegationCadastro() {
    return (
        <div id='side-bar' className='d-flex align-items-center flex-column justify-content-around'>
            <div id='logo-box'>
                <img src="./logo.png" alt="" width={130} />
            </div>
            
            <div id='navegation-box'>
                <NavLink to="/cadastro/suasInformacoes">
                    <li>
                        <div className='step-number' id='1'>1</div>
                        <div className='step-info'><div className='step-info-number'>Primeiro Passo</div>Suas informações</div>
                    </li>
                </NavLink>

                <NavLink to="/cadastro/dadosPessoais">
                <li>
                    <div className='step-number'>2</div>
                    <div className='step-info'><div className='step-info-number'>Segundo Passo</div>Dados pessoais</div>
                </li>
                </NavLink>


                <NavLink to="/cadastro/TipoCadastro">
                <li>
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