import './SuasInformacoes.css'
import Input from '../../../components/input/Input'
import PreviousNextButtons from '../previous-next/PreviousNextButtons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useHistory, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react'

const validationSchema = yup.object().shape({
    nomeCompleto: yup.string().required("Campo obrigatório."),
    email: yup.string().email("Escreva um email válido").required('Campo obrigatório.'),
    celular: yup.string().matches(/^\d+$/, 'O número informado é inválido.').required('Campo obrigatório.'),
    senha: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres.').max(24, 'A senha deve conter 24 caracteres no máximo').required('Campo obrigatório'),
    senhaConfirm: yup.string().oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais.').required('Campo obrigatório')
  })


const SuasInformacoes = () => {

  const [formData, setFormData] = useState({});
  const { handleSubmit, control, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: formData // Preencher com os dados do estado formData, se houver
  });

  const history = useHistory();
  

  useEffect(() => {
    // Verificar se existem dados no localStorage e, se existirem, atualizar o formData
    const storedData = localStorage.getItem('dadosPessoaisFormData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
      // Preencher os campos com os valores armazenados
      Object.keys(parsedData).forEach((fieldName) => {
        setValue(fieldName, parsedData[fieldName]);
      });
    }
  }, [setValue]);

  const addPost = (data) => {
    console.log(data);
    if (Object.keys(errors).length === 0) {
      // Armazenar os dados preenchidos no estado formData
      setFormData(data);
      // Armazenar os dados no localStorage para uso posterior
      localStorage.setItem('dadosPessoaisFormData', JSON.stringify(data));
      // Redirecionar para a próxima página após a submissão do formulário
      history.push('/cadastro/dadosPessoais');
    } else {
      console.log('Existem erros no formulário.');
    }
  };


    return (
        <>
            <motion.div className='principal-box-cadastro d-flex flex-column justify-content-between'
                initial={{y: -200}}
                animate={{ y: 0}}
                exit={{y:-200}}
            >
                <div className='first-text-cadastro mb-3'>
                    <h2 className='text-principal'>Suas informações</h2>
                    <p>Insira suas informações básicas para o cadastro</p>
                </div>
                <div className='d-flex align-items-center'>
                    <div>
                        <label htmlFor="image-perfil" id='placeholder-perfil'></label>
                        <input type="file" name="image-perfil" id="image-perfil" />
                    </div>
                    <div id='text-placeholder-perfil'>
                        <h6 className='text-principal'>Clique para inserir uma foto para seu perfil</h6>
                        <p>Seu rosto precisa estar nitído na foto.</p>
                        <p>Tire a foto em um local iluminado.</p>
                        <p>Limite máximo de 3mb.</p>
                    </div>
                </div>

                <div className='mt-2'>
                     <form action="" onSubmit={handleSubmit(addPost)}>
                     <Input
                      id="nome-completo"
                      label="Nome completo:"
                      type="text"
                      name="nomeCompleto" 
                      placeholder="Digite seu nome completo"
                      validation={{ control }}
                      error={errors.nomeCompleto}/>
                         <Input id="email" label="E-mail:" type="text" name="email" placeholder="Digite seu e-mail"  validation={{ control }} error={errors.email}/> 
                        <Input id="celular" label="Celular:" type="text" name="celular" placeholder="Digite seu celular" validation={{ control }} error={errors.celular} />
                        <div className='d-flex w-100 justify-content-between'>
                            <div style={{ width: "49%" }}><Input id="senha-cadastro" label="Senha:" type="text" name="senha" placeholder="Digite sua senha"  validation={{ control }} error={errors.senha}/></div>
                            <div style={{ width: "49%" }}><Input id="senha-confirm-cadastro" label="Confirmar senha:" type="text" name="senhaConfirm" placeholder="Digite sua senha novamente" validation={{ control }} error={errors.senhaConfirm}/></div>
                        </div> 


                <div className='mt-4 d-flex align-items-center justify-content-between w-100'>
                    <div></div>
                    <button id='button-suasInfos'  type='button' onClick={handleSubmit(addPost)} className='rounded text-light mt-2' >Próxima etapa </button>
                </div>
                </form>
                </div>
            </motion.div>
                <div></div>
            </div>
        </>
    );
}
export default SuasInformacoes;