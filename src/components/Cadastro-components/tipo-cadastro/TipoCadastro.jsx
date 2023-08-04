import { motion } from 'framer-motion';
import './TipoCadastro.css';
import prestadorServico from '/prestadorServico-icon.png';
import cliente from '/cliente-icon.png';
import { useHistory } from "react-router-dom";
import { useState, useContext } from 'react';
import { UserProvider, Context } from '../../../../context/userContext';

const TipoCadastro = ({ suasInformacoesDados, dadosPessoaisDados }) => {

    const history = useHistory();
    const [tipoCadastro, setTipoCadastro] = useState('');
    const [erroTipoCadastro, setErroTipoCadastro] = useState('');
    const { register } = useContext(Context)

    function voltarParaDadosPessoais() {
        history.push('/cadastro/dadosPessoais');
    }


    async function validacaoTipoCadastro() {
        if (!tipoCadastro) {
            setErroTipoCadastro('Por favor, selecione um tipo de cadastro antes de prosseguir.');
        } else {
            setErroTipoCadastro('');
            const user = {
                "name": suasInformacoesDados.nomeCompleto,
                "email": suasInformacoesDados.email,
                "cellphone": suasInformacoesDados.celular,
                "password": suasInformacoesDados.senha,
                "confirmPassword": suasInformacoesDados.senhaConfirm,
                "CPF": dadosPessoaisDados.cpf,
                "RG": dadosPessoaisDados.rg,
                "birthDate": dadosPessoaisDados.dataNascimento,
                "completeAdress": dadosPessoaisDados.endereco,
                "CEP": dadosPessoaisDados.cep,
                "number": dadosPessoaisDados.numero,
                "neighborhood": dadosPessoaisDados.bairro,
                "locationState": dadosPessoaisDados.estado,
                "complement": dadosPessoaisDados.complemento,
                "city": dadosPessoaisDados.cidade,
                "tipoCadastro": tipoCadastro,
            }
            try {
                if (tipoCadastro === 'prestadorServico') {
                    register(user, '/anuncio', history)
                } else if (tipoCadastro === 'cliente') {
                    register(user, '/', history)
                }
              localStorage.removeItem('suasInformacoesFormData'); // Remover dados de SuasInformacoes
              localStorage.removeItem('dadosPessoaisFormData');
            } catch (error) {
                console.log(error)
            }


        }
    }



    return (
        <>
            <motion.div className='principal-box-cadastro box-tipo-cadastro d-flex flex-column justify-content-between'
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                exit={{ y: -200 }}>
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
                        {erroTipoCadastro && <p className="erro-tipo-cadastro text-center">{erroTipoCadastro}</p>}
                    </div>
                </div>
                <div className='mt-4 d-flex flex-column align-items-center'>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        <button id='buttonVoltarDadosPessoais' onClick={voltarParaDadosPessoais}>Voltar</button>
                        <button id='button-suasInfos' className='rounded text-light mt-2' onClick={validacaoTipoCadastro}>Próxima etapa</button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default TipoCadastro;
