import NavegationCadastro from '../../components/Cadastro-components/navegation-cadastro/NavegationCadastro';
import { useRouteMatch, Route } from "react-router-dom";
import SuasInformacoes from '../../components/Cadastro-components/SuasInformacoes/SuasInformacoes';
import DadosPessoais from '../../components/Cadastro-components/dados-pessoais/DadosPessoais';
import TipoCadastro from '../../components/Cadastro-components/tipo-cadastro/TipoCadastro';
import AnuncioPage from '../../components/Cadastro-components/anuncioPage/anuncioPage';
import React, { useEffect, useState} from 'react';
import { motion } from 'framer-motion';


const Cadastro = () => {
    
   const[suasInformacoesUser, setSuasInformacoesUser] = useState()
   const[dadosPessoaisUser, setDadosPessoais] = useState()
   const[dadosUser, setDadosUser] = useState()
   const[isPrestadorServicoCadastro, setIsPrestadorServicoCadastro] = useState(false)
    const[imageForm, setImageForm] = useState(new FormData())

    function salvarInformacoes(dados){
        setSuasInformacoesUser(dados)
    }

    function salvarFoto(foto){
        setImageForm(foto)
    }

    function SalvarInformacoesDadosPessoais(dadosPessoais){
        setDadosPessoais(dadosPessoais)
    }

    function salvarDadosUser(userData){
        setDadosUser(userData)
    }

    useEffect(()=>{
        if(dadosUser){
            if(dadosUser.tipoCadastro == "prestadorServico"){
                setIsPrestadorServicoCadastro(true)          
            }else if(dadosUser.tipoCadastro == "cliente"){
                setIsPrestadorServicoCadastro(false)
            }
        }
    }, [dadosUser])
    return (
        <>
            <motion.div className='d-flex' style={{ overflowY: "hidden" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <NavegationCadastro prestadorServico={isPrestadorServicoCadastro}/>
                <Route path="/cadastro/suasInformacoes" exact>
                    <SuasInformacoes  onSave={salvarInformacoes} onSaveImage={salvarFoto}/>
                </Route>
                <Route path="/cadastro/dadosPessoais" exact>
                    <DadosPessoais onSaveDadosPessoais={SalvarInformacoesDadosPessoais} />
                </Route>
                <Route path="/cadastro/tipoCadastro" exact>
                    <TipoCadastro suasInformacoesDados={suasInformacoesUser} dadosPessoaisDados={dadosPessoaisUser} prestadorServicoDados={salvarDadosUser} imagemPerfil={imageForm}/>
                </Route>
                <Route path="/cadastro/anuncioPage" exact>
                    <AnuncioPage prestadorServicoDados={dadosUser}/>
                </Route>
            </motion.div>
        </>
    );
}

export default Cadastro;
