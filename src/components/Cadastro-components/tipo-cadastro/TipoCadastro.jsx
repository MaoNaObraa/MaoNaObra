
import { motion } from 'framer-motion';
import './TipoCadastro.css';
import prestadorServico from '/prestadorServico-icon.png';
import cliente from '/cliente-icon.png';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';

const TipoCadastro = () => {
    const history = useHistory();
    const [tipoCadastro, setTipoCadastro] = useState('');
    const [erroTipoCadastro, setErroTipoCadastro] = useState('');

    function voltarParaDadosPessoais() {
        history.push('/cadastro/dadosPessoais'); // Redirecionar para a página "dados Pessoais"
    }

    function validacaoTipoCadastro() {
        if (!tipoCadastro) {
            setErroTipoCadastro('Por favor, selecione um tipo de cadastro antes de prosseguir.');
        } else {
            setErroTipoCadastro(''); // Limpar a mensagem de erro se houver algum valor selecionado

            if (tipoCadastro === 'prestadorServico') {
                history.push('/anuncioPage'); // Redirecionar para a página de prestador de serviço
            } else if (tipoCadastro === 'cliente') {
                history.push('/'); // Redirecionar para a página de cliente
            }
        }
    }

    return (
        <>
            <motion.div className='principal-box-cadastro d-flex flex-column justify-content-between'
            initial={{y: -200}}
            animate={{ y: 0}}
            exit={{y:-200}}>
                <div className='first-text-cadastro mb-3'>
                    <h2 className='text-principal text-center'>Selecione o seu tipo de cadastro</h2>
                </div>

                <div id="select-tipo-cadastro" className=' d-flex flex-column justify-content-center align-items-center'>
                    <div className='mb-3'>
                        <input type="radio" name="tipoCadastro" id="prestadorServico" value="prestadorServico" className='hidden' onChange={() => {
                            setTipoCadastro('prestadorServico');
                            setErroTipoCadastro('');
                        }} />
                        <label htmlFor="prestadorServico" id='prestadorServico-checkbox' className="tipo-cadastro-label d-flex align-items-center justify-content-center flex-column">
                            <img src={prestadorServico} width={80} className='mb-2' />
                            <h3>Prestador de serviço</h3>
                            <p>Você quer divulgar seu serviço?</p>
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="tipoCadastro" id="cliente" value="cliente" className='hidden' onChange={() => {
                            setTipoCadastro('cliente');
                            setErroTipoCadastro('');
                        }} />
                        <label htmlFor="cliente" id='cliente-checkbox' className="tipo-cadastro-label d-flex align-items-center justify-content-center flex-column" >
                            <img src={cliente} width={80} className='mb-2' />
                            <h3>Cliente</h3>
                            <p>Você quer procurar um serviço?</p>
                        </label>
                        {erroTipoCadastro && <p className="erro-tipo-cadastro">{erroTipoCadastro}</p>}
                    </div>
                </div>
                <div className='mt-4 d-flex align-items-center justify-content-between'>
                    <button id='buttonVoltarDadosPessoais' onClick={voltarParaDadosPessoais}>Voltar</button>
                    <button id='button-suasInfos' className='rounded text-light mt-2' onClick={validacaoTipoCadastro}>Próxima etapa</button>
                </div>
            </motion.div>
        </>
    );
}

export default TipoCadastro;
