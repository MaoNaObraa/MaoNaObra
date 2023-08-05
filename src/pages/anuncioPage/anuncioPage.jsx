import api from '../../../utils/api'
import { string } from 'yup';
import Input from '../../components/input/Input';
import './anuncioPage.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';

const validationSchema = yup.object().shape({
    ServicosOferecidos: string().required('O campo é obrigatório'),
    Instagram: yup.string().required('O campo é obrigatório, digite seu instagram'),
    categorias: yup.object({value: yup.string().required("Campo obrigatorio")}),
    Whatsapp: yup.string().matches(/^[0-9]{10,11}$/, 'Número de WhatsApp inválido. Deve conter de 10 a 11 dígitos numéricos.').required('O campo é obrigatório, digite um número válido'),
    Telefone: yup.string().matches(/^\d{10,11}$/, 'Número de telefone inválido. Deve conter de 10 a 11 dígitos numéricos.').required('O campo é obrigatório, digite um número válido'),
    description: yup.string().required('O campo é obrigatório'),
})

const AnuncioPage = () => {
    const history = useHistory();
    const[userAd, setUserAd] = useState()
    const[token] = useState(localStorage.getItem('token') || '')


    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema),
    });

     function handleAnuncio(data) {
    



        const anuncio = {
            "descriptionAd": data.description,
            "servicesAd": data.ServicosOferecidos,
            "category": data.categorias.value,
            "whatsappContact": data.Whatsapp,
            "instagramContact": data.Instagram,
            "telephoneContact": data.Telefone

        }
        console.log(anuncio)
    }

    return (
        <div>

            <div className='d-flex container pt-5 justify-content-between' id="principal-anuncio">
                <div>
                    <form action='' onSubmit={handleSubmit(data => { handleAnuncio(data) })}>
                        <div id='titulo'>
                            <h3 id='text-Principal'>Vamos saber um pouco mais sobre você</h3>
                        </div>
                        <div className='mt-3'>
                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="description">Descreva sobre seu trabalho</label>

                                
                                <Controller
                                    name={"description"}
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <textarea name="description" id="description" cols="30" rows="10" {...field}></textarea>
                                        )
                                    }}
                                />
                                {errors.description && <span className='error-message'>{errors.description.message}</span>}

                            </div>
                            <label id='Servicos' className='mt-2'>Em qual categoria seu serviço se encaixa?</label>
                            <div className='d-flex flex-column mb-3'>
                                <Controller
                                    name={"categorias"}
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <Select
                                                {...field}
                                                options={[{ value: "construcaoReformas", label: "Construção e Reformas" },
                                                 { value: "manuntencaoReparos", label: "Manuntenção e Reparos" },
                                                 { value: "servicosAutomotivos", label: "Serviços Automotivos" },
                                                 { value: "servicosDomesticos", label: "Serviços Domésticos" },
                                                 { value: "servicosJardinagem", label: "Serviços de Jardinagem" },
                                                ]}
                                                placeholder="Selecione a categoria"
                                            />
                                        )
                                    }}
                                />
                                {errors.categorias && <span className='error-message'>{errors.categorias?.value?.message}</span>}
                            </div>
                            <Input id="caixa3" label="Quais serviços você oferece?(Separe cada serviço por virgula)" name='ServicosOferecidos' type="text" placeholder="Ex: Pedreiro, Eletricista, Ecanador" validation={{ control }} error={errors.ServicosOferecidos} />
                        </div>
                        <div className=' p-1 flex-column mt-4'>
                            <div id="titulo2">
                                <h2 id='text2'>Contato</h2>
                            </div>
                            <div>
                                <Input id="Instagram" label="Instagram" type="text" name="Instagram" placeholder="Digite seu Instagram" validation={{ control }} error={errors.Instagram} />
                                <Input id="Whatsapp" label="Whatsapp" type="text" name="Whatsapp" placeholder="Digite seu Whatsapp" validation={{ control }} error={errors.Whatsapp} />
                                <Input id="Telefone" label="Telefone" type="text" name="Telefone" placeholder="Digite seu Telefone" validation={{ control }} error={errors.Telefone} />
                            </div>
                            <div className=' my-5'>
                                <button id='button-suasInfos' type='submit' className='w-100 rounded text-light'>Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='caixa-titulo'>
                    <div className="caixa-descrição">
                        <h3 className="primeiro">Como Funciona?</h3>
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