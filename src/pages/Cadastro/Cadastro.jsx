import NavegationCadastro from '../../components/Cadastro-components/navegation-cadastro/NavegationCadastro'
import { useRouteMatch, Route } from "react-router-dom";
import SuasInformacoes from '../../components/Cadastro-components/SuasInformacoes/SuasInformacoes'
import DadosPessoais from '../../components/Cadastro-components/dados-pessoais/DadosPessoais';
import TipoCadastro from '../../components/Cadastro-components/tipo-cadastro/TipoCadastro';

const Cadastro = () => {

    let { path } = useRouteMatch();
    return (
        <>
            <div className='d-flex'>
                <NavegationCadastro />
                <Route path="/cadastro/suasInformacoes" exact>
                    <SuasInformacoes />
                </Route>
                <Route path="/cadastro/dadosPessoais" exact>
                    <DadosPessoais />
                </Route>
                <Route path="/cadastro/TipoCadastro" exact>
                    <TipoCadastro />
                </Route>
            </div>
        </>
    );
}

export default Cadastro;
