import { string } from 'yup';
import Input from '../../components/input/Input';
import Navigation from '../../components/navigation/Navigation';
import './anuncioPage.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

const validationSchema = yup.object().shape({
    categoria: string().required('Campo obrigatório'),
    ServicosOferecidos: string().required('O campo é obrigatório escolha uma opção'),
    Instagram: string().required('O campo é obrigatório, digite seu instagram'),
    descrevaSeuTrabalho: string().min(207, 'O mínimo de caracteres é 207').max(933, 'O máxomo de caracteres é 933').required('O campo é obrigatório, descreva seu trabalho'),
    Whatsapp: yup.string().matches(/^[0-9]{10,11}$/, 'Número de WhatsApp inválido. Deve conter de 10 a 11 dígitos numéricos.').required('O campo é obrigatório, digite um número válido'),
    Telefone: yup.string().matches(/^\d{10,11}$/, 'Número de telefone inválido. Deve conter de 10 a 11 dígitos numéricos.').required('O campo é obrigatório, digite um número válido'),
})

const AnuncioPage = () => {

    const history = useHistory();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const addPost = (data) => {
        const newFormData = {
            'categoria': data.categoria,
            'ServicosOferecidos': data.ServicosOferecidos,
            'Instagram': data.Instagram,
            'descrevaSeuTrabalho': data.descrevaSeuTrabalho,
            'Whatsapp': data.Whatsapp,
            'Telefone': data.Telefone,
        };

        if (Object.keys(errors).length === 0) {
            console.log('newFormData:', newFormData); // Exibir dados do formulário no console
            history.push('/recuperarSenha'); // Redirecionar para a próxima rota
        } else {
            console.log('Existem erros no formulário.');
        }
    };

    return (
        <div>

            <div className='d-flex container pt-4 justify-content-between' id="principal-anuncio">
                <div>
                    <form onSubmit={handleSubmit(addPost)}>
                        <div id='titulo'>
                            <h3 id='text-Principal'>Vamos saber um pouco mais sobre você</h3>
                        </div>
                        <div>
                            <Input id="caixa1" label="Descreva sobre seu trabalho" type="text" name='descrevaSeuTrabalho' validation={{ control }} error={errors.descrevaSeuTrabalho} />
                            <label id='Servicos'>Em qual categoria seu serviço se encaixa?</label>
                            <div className='d-flex flex-column'>
                                <select name='ServicosOferecidos' id='ServicosOferecidos' className='rounded input-component'>
                                    <option value="construcaoReformas">Construção e Reformas</option>
                                    <option value="manuntencaoReparos">Manuntenção e Reparos</option>
                                    <option value="servicosAutomotivos">Serviços Automotivos</option>
                                    <option value="servicosDomesticos">Serviços Domésticos</option>
                                    <option value="servicosJardinagem">Serviços de Jardinagem</option>
                                </select>
                            </div>
                            <Input id="caixa3" label="Quais serviços você oferece?(Separe cada serviço por virgula)" name='ServicosOferecidos' type="text" placeholder="Pedreiro,Eletricista,Ecanador" validation={{ control }} error={errors.ServicosOferecidos} />
                        </div>
                        <div className=' p-1 flex-column mt-2'>
                            <div id="titulo2">
                                <h2 id='text2'>Contato</h2>
                            </div>
                            <Input id="Instagram" label="Instagram" type="text" name="Instagram" placeholder="Digite seu Instagram" validation={{ control }} error={errors.Instagram} />
                            <Input id="Whatsapp" label="Whatsapp" type="text" name="Whatsapp" placeholder="Digite seu Whatsapp" validation={{ control }} error={errors.Whatsapp} />
                            <Input id="Telefone" label="Telefone" type="text" name="Telefone" placeholder="Digite seu Telefone" validation={{ control }} error={errors.Telefone} />
                            <div className='d-flex justify-content-between mt-4'>
                                <div></div>
                                <button id='button-suasInfos' type='submit' className='rounded text-light'>Próxima etapa</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='caixa-titulo'>
                    <div className="caixa-descrição">
                        <h2 className="primeiro">Como Funciona?</h2>
                        <h6><p>Descreva seu trabalho, após seu cadasto
                            seu perfil irá ficar disponível para
                            possíveis clientes próximos a sua área.</p>
                            <p>Caso um cliente queira contratar seu
                                serviço, uma notificação será enviada
                                para o seu e-mail cadastrado, caso aceite
                                o cliente poderá entrar em contato para
                                acordo.</p>
                            <p>Nós do MaoNaObra não nos
                                responsabilizamos com pagamento,
                                apenas divulgamos o seu trabalho.</p></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnuncioPage;