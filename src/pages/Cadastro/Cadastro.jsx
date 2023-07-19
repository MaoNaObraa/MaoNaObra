import './cadastro.css'
import NavegationCadastro from '../../components/Cadastro-components/navegation-cadastro/NavegationCadastro'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SuasInformacoes from '../../components/Cadastro-components/SuasInformacoes/SuasInformacoes'
import DadosPessoais from '../../components/Cadastro-components/dados-pessoais/DadosPessoais';
import TipoCadastro from '../../components/Cadastro-components/tipo-cadastro/TipoCadastro';

const Cadastro = () => {
    return (
        <>
            
        <div className='d-flex'>
            <NavegationCadastro />
            <BrowserRouter>

                <Switch>

                    <Route path='/suasInformacoes' exact>
                        <SuasInformacoes />
                    </Route>

                    <Route path='/dadosPessoais' exact>
                        <DadosPessoais />
                    </Route>

                    <Route path='/TipoCadastro' exact>
                        <TipoCadastro />
                    </Route>



                </Switch>
            </BrowserRouter>
        </div>
        </>
    );
}

export default Cadastro;
