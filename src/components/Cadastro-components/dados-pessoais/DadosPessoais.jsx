import Input from "../../input/Input";
import './DadosPessoais.css'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useHistory } from 'react-router-dom';

yup.setLocale({
        date: {
            max: 'Data deve ser anterior ou igual a ${max}',
          },
     

})
const validationSchema = yup.object().shape({
      cpf: yup.string().required('Campo obrigatório.').matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido. O formato correto é XXX.XXX.XXX-XX.'),
      rg: yup.string().required('Campo obrigatório.').matches(/^\d{2}\.\d{3}\.\d{3}$/, 'RG inválido. O RG deve ter o formato XX.XXX.XXX.'),
      dataNascimento: yup
    .date()
    .max(new Date(), '${path} não pode ser no futuro')
    .required('${path} é um campo obrigatório'),
      endereco: yup.string().required(),
      numero: yup.string().required('Campo obrigatório.').matches(/^\d+$/, 'Este campo deve conter apenas números.'),
      cep: yup.string().required('Campo obrigatório.').matches(/^\d{5}\-\d{3}$/, 'CEP inválido. O formato correto é XXXXX-XXX.'),
      estado: yup.string().required('Campo obrigatório.'),
      bairro: yup.string().required('Campo obrigatório.'),
      cidade: yup.string().required('Campo obrigatório.'),
      complemento: yup.string().required('Campo obrigatório.')
      });


const DadosPessoais = () => {

   

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
      });
      
      const addPost = (data) => {
        console.log(data);
        if (Object.keys(errors).length === 0) { 
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
            <div className='principal-box-cadastro d-flex flex-column justify-content-between '>
                <div>
                    <div className='first-text-cadastro mb-2'>
                        <h2 className='text-principal'>Suas informações</h2>
                        <p>Insira seus dados pessoais para melhor segurança</p>
                    </div>

                    <div>
                        <form action="" onSubmit={handleSubmit(addPost)}>
                            <div className='d-flex w-100 justify-content-between'>
                                <div style={{ width: "49%" }}><Input id="cpf" label="CPF" type="text" name="cpf" placeholder="Digite seu cpf" validation={{ control }}  error={errors.cpf} /></div>
                                 <div style={{ width: "49%" }}><Input id="rg" label="RG" type="text" name="rg" placeholder="Digite seu RG"  validation={{ control }}  error={errors.rg}/></div> 
                            </div>
                              <Input id="dataNascimento" label="Data de nascimento" type="date" name="dataNascimento" placeholder="Digite sua data de nascimento" validation={{ control }}  error={errors.dataNascimento} /> 
                             </form>
                    </div>
                </div>
                  <div className="mt-2">
                    <div className='first-text-cadastro mb-3'>
                        <h2 className='text-principal'>Endereço</h2>
                        <p>Insira seu endereço para melhor segurança</p>
                    </div>
                    <form action="" onSubmit={handleSubmit(addPost)}>
                    <div className='d-flex w-100 justify-content-between'>
                        <div style={{ width: "80%" }}><Input id="endereco" label="Endereço" type="text" name="endereco" placeholder="Digite seu endereço" validation={{ control }}  error={errors.endereco}  /></div>
                       <div style={{ width: "19%" }}><Input id="numero" label="Número" type="text" name="numero" placeholder="Digite o número" validation={{ control }}  error={errors.numero}/></div>
                    </div>
                     <div className='d-flex w-100 justify-content-between'>
                         <div style={{ width: "49%" }}><Input id="cep" label="CEP" type="text" name="cep" placeholder="Digite seu CEP" validation={{ control }}  error={errors.cep}/></div> 
                        <div style={{ width: "49%" }}><Input id="estado" label="Estado" type="text" name="estado" placeholder="Digite o seu estado" validation={{ control }}  error={errors.estado} /></div>
                    </div>
                    <div className='d-flex w-100 justify-content-between'>
                         <div style={{ width: "49%" }}><Input id="bairro" label="Bairro" type="text" name="bairro" placeholder="Digite seu bairro" validation={{ control }}  error={errors.bairro} /></div>
                        <div style={{ width: "49%" }}><Input id="cidade" label="Cidade" type="text" name="cidade" placeholder="Digite a sua cidade"  validation={{ control }}  error={errors.cidade} /></div> 
                    </div>
                     <Input id="complemento" label="Complemento" type="text" name="complemento" placeholder="Digite o complemento" validation={{ control }}  error={errors.complemento}/> 
                    


                <div className='mt-4 d-flex align-items-center justify-content-between'>
                    <button  className='rounded mt-2' id='buttonVoltarDadosPessoais'onClick={voltarParaSuasInformacoes}> Voltar</button>
                  <button id='button-suasInfos'  type='button' onClick={handleSubmit(addPost)} className='rounded text-light mt-2'>Próxima etapa</button>
                </div>
                </form>
                </div>  
                <div></div>
            </div>
        </>
    );
}

export default DadosPessoais;