import NavegationCadastro from '../../components/Cadastro-components/navegation-cadastro/NavegationCadastro';
import { useRouteMatch, Route } from "react-router-dom";
import SuasInformacoes from '../../components/Cadastro-components/SuasInformacoes/SuasInformacoes';
import DadosPessoais from '../../components/Cadastro-components/dados-pessoais/DadosPessoais';
import TipoCadastro from '../../components/Cadastro-components/tipo-cadastro/TipoCadastro';
import React, { useEffect, useState} from 'react';
import { motion } from 'framer-motion';


const Cadastro = () => {
    
   const[suasInformacoesUser, setDadosSuasInformacoes] = useState()
   const[dadosPessoaisUser, setDadosPessoais] = useState()

    function salvarInformacoes(dados){
        
        setDadosSuasInformacoes(dados)
    }

    function SalvarInformacoesDadosPessoais(dadosPessoais){

        setDadosPessoais(dadosPessoais)
    }
  

    return (
        <>
            <motion.div className='d-flex' style={{ overflowY: "hidden" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <NavegationCadastro />
                <Route path="/cadastro/suasInformacoes" exact>
                    <SuasInformacoes  onSave={salvarInformacoes}/>
                </Route>
                <Route path="/cadastro/dadosPessoais" exact>
                    <DadosPessoais onSaveDadosPessoais={SalvarInformacoesDadosPessoais} />
                </Route>
                <Route path="/cadastro/tipoCadastro" exact>
                    <TipoCadastro suasInformacoesDados={suasInformacoesUser} dadosPessoaisDados={dadosPessoaisUser}/>
                </Route>
            </motion.div>
        </>
    );
}

export default Cadastro;
