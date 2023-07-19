import './NavegationCadastro.css'


function NavegationCadastro() {
    return (
        <div id='side-bar' className='d-flex align-items-center flex-column justify-content-around'>
            <div id='logo-box'>
                <img src="logo.png" alt="" width={130} />
            </div>
            
            <div id='navegation-box'>
                <a href="/suasInformacoes">
                <li>
                    <div className='step-number' id='1'>1</div>
                    <div className='step-info'><div className='step-info-number'>Primeiro Passo</div>Suas informações</div>
                </li>
                </a>

                <a href="/dadosPessoais">
                <li>
                    <div className='step-number'>2</div>
                    <div className='step-info'><div className='step-info-number'>Segundo Passo</div>Dados pessoais</div>
                </li>
                </a>


                <a href="/TipoCadastro">
                <li>
                    <div className='step-number'>3</div>
                    <div className='step-info'><div className='step-info-number'>Terceiro Passo</div>Tipo de cadastro</div>
                </li>
                </a>
            </div>
            <div></div>
        </div>
    );
}

export default NavegationCadastro;