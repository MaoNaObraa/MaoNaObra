import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../input/Input';
import { motion } from 'framer-motion';
import './DadosPessoais.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';

const validationSchema = yup.object().shape({
  cpf: yup.string().required('Campo obrigatório.').matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido. O formato correto é XXX.XXX.XXX-XX.'),
  rg: yup.string().required('Campo obrigatório.').matches(/^\d{2}\.\d{3}\.\d{3}$/, 'RG inválido. O RG deve ter o formato XX.XXX.XXX.'),
  dataNascimento: yup
.date('A data de nascimento é obrigatória.')
.max(moment().format('YYYY-MM-DD'), 'A data de nascimento não pode ser no futuro'),
  endereco: yup.string().required(),
  numero: yup.string().required('Campo obrigatório.').matches(/^\d+$/, 'Este campo deve conter apenas números.'),
  cep: yup.string().required('Campo obrigatório.').matches(/^\d{5}\-\d{3}$/, 'CEP inválido. O formato correto é XXXXX-XXX.'),
  estado: yup.string().required('Campo obrigatório.'),
  bairro: yup.string().required('Campo obrigatório.'),
  cidade: yup.string().required('Campo obrigatório.'),
  complemento: yup.string().required('O campo é obrigatório.')
  });


const DadosPessoais = ({onSaveDadosPessoais}) => {

  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('dadosPessoaisFormData');
    return storedData ? JSON.parse(storedData) : {};
  });



  
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: formData
  });

  useEffect(() => {
    localStorage.setItem('dadosPessoaisFormData', JSON.stringify(formData));
  }, [formData]);

  const addPost = (data) => {
    if (Object.keys(errors).length === 0) {
      onSaveDadosPessoais(data);
      enviarSuasInformacoes();
    } else {
      console.log("Existem erros no formulário.");
    }
  }

const history = useHistory();

function voltarParaSuasInformacoes(){
history.push("/cadastro/suasInformacoes")
}

function enviarSuasInformacoes() {
    // Redirecionar para a próxima página após a submissão do formulário
    history.push('/cadastro/TipoCadastro');
}
  
  return (
    <>
      <motion.div className='principal-box-cadastro d-flex flex-column justify-content-between dadosPessoais'>
      
        <form onSubmit={handleSubmit(addPost)} id='form-dadosPessoais'>
          <div className='w-100'> 
          <div className='first-text-cadastro mb-2'>
          <h2 className='text-principal'>Suas informações</h2>
          <p>Insira seus dados pessoais para melhor segurança</p>
        </div>
          <div className='d-flex w-100 justify-content-between'>
            <div style={{ width: "49%" }}>
              <Input id="cpf" label="CPF" type="text" name="cpf" placeholder="Digite seu cpf" validation={{ control }} error={errors.cpf} defaultValue={formData.cpf} />
            </div>
            <div style={{ width: "49%" }}>
              <Input id="rg" label="RG" type="text" name="rg" placeholder="Digite seu RG" validation={{ control }} error={errors.rg} defaultValue={formData.rg} />
            </div>
          </div>
          <Input id="dataNascimento" label="Data de nascimento" type="date" name="dataNascimento" placeholder="Digite sua data de nascimento" validation={{ control }} error={errors.dataNascimento} defaultValue={formData.dataNascimento} />
          <div className='first-text-cadastro mb-3 mt-5'>
            <h2 className='text-principal'>Endereço</h2>
            <p>Insira seu endereço para melhor segurança</p>
          </div>
          
          <div className='d-flex w-100 justify-content-between'>
            <div style={{ width: "80%" }}>
              <Input id="endereco" label="Endereço" type="text" name="endereco" placeholder="Digite seu endereço" validation={{ control }} error={errors.endereco} defaultValue={formData.endereco} />
            </div>
            <div style={{ width: "19%" }}>
              <Input id="numero" label="Número" type="text" name="numero" placeholder="Digite o número" validation={{ control }} error={errors.numero} defaultValue={formData.numero} />
            </div>
          </div>
          <div className='d-flex w-100 justify-content-between'>
            <div style={{ width: "49%" }}>
              <Input id="cep" label="CEP" type="text" name="cep" placeholder="Digite seu CEP" validation={{ control }} error={errors.cep} defaultValue={formData.cep} />
            </div>
            <div style={{ width: "49%" }}>
              <Input id="estado" label="Estado" type="text" name="estado" placeholder="Digite o seu estado" validation={{ control }} error={errors.estado} defaultValue={formData.estado} />
            </div>
          </div>
          <div className='d-flex w-100 justify-content-between'>
            <div style={{ width: "49%" }}>
              <Input id="bairro" label="Bairro" type="text" name="bairro" placeholder="Digite seu bairro" validation={{ control }} error={errors.bairro} defaultValue={formData.bairro} />
            </div>
            <div style={{ width: "49%" }}>
              <Input id="cidade" label="Cidade" type="text" name="cidade" placeholder="Digite a sua cidade" validation={{ control }} error={errors.cidade} defaultValue={formData.cidade} />
            </div>
          </div>
          <Input id="complemento" label="Complemento" type="text" name="complemento" placeholder="Digite o complemento" validation={{ control }} error={errors.complemento} defaultValue={formData.complemento} />
          </div>
          <div className='mt-4 d-flex align-items-center justify-content-between w-100'>
            <button className='rounded mt-2' id='buttonVoltarDadosPessoais' type="button" onClick={voltarParaSuasInformacoes}>Voltar</button>
            <button id='button-suasInfos' type='submit' className='rounded text-light mt-2'>Próxima etapa</button>
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default DadosPessoais;