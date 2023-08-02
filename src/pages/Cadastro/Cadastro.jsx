import NavegationCadastro from '../../components/Cadastro-components/navegation-cadastro/NavegationCadastro'
import { Route } from "react-router-dom";
import SuasInformacoes from '../../components/Cadastro-components/SuasInformacoes/SuasInformacoes'
import DadosPessoais from '../../components/Cadastro-components/dados-pessoais/DadosPessoais';
import TipoCadastro from '../../components/Cadastro-components/tipo-cadastro/TipoCadastro';
import { motion } from 'framer-motion';

const Cadastro = () => {

    return (
        <>
            <motion.div className='d-flex' style={{overflowY: "hidden"}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
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
            </motion.div>
        </>
    );
}

export default Cadastro;
