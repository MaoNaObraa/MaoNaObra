import api from '../../../../utils/api';
import { string } from 'yup';
import Input from '../../input/Input';
import './anuncioPage.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { UserProvider, Context } from '../../../../context/userContext';

const validationSchema = yup.object().shape({
    ServicosOferecidos: string().required('O campo é obrigatório'),
    Instagram: yup.string().required('O campo é obrigatório, digite seu instagram'),
    categorias: yup.object({ value: yup.string().required("Campo obrigatorio") }),
    Whatsapp: yup.string().matches(/^[0-9]{10,11}$/, 'Número de WhatsApp inválido. Deve conter de 10 a 11 dígitos numéricos.').required('O campo é obrigatório, digite um número válido'),
    Telefone: yup.string().matches(/^\d{10,11}$/, 'Número de telefone inválido. Deve conter de 10 a 11 dígitos numéricos.').required('O campo é obrigatório, digite um número válido'),
    description: yup.string().required('O campo é obrigatório'),
})

const AnuncioPage = ({ prestadorServicoDados }) => {
    const history = useHistory()
    const { register } = useContext(Context)

    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema),
    });

    function handleAnuncio(data) {
        const userData = new FormData()
        for (const [key, value] of prestadorServicoDados.entries()) {
            userData.append(key, value);
        }

        userData.append("descriptionAd", data.description)
        userData.append("servicesAd", data.ServicosOferecidos)
        userData.append("category", data.categorias.value)
        userData.append("whatsappContact", data.Whatsapp)
        userData.append("instagramContact", data.Instagram)
        userData.append("telephoneContact", data.Telefone)

        // const user = {
        //     "name": prestadorServicoDados.name,
        //     "email": prestadorServicoDados.email,
        //     "cellphone": prestadorServicoDados.cellphone,
        //     "password": prestadorServicoDados.password,
        //     "confirmPassword": prestadorServicoDados.confirmPassword,
        //     "CPF": prestadorServicoDados.CPF,
        //     "RG": prestadorServicoDados.RG,
        //     "birthDate": prestadorServicoDados.birthDate,
        //     "completeAdress": prestadorServicoDados.completeAdress,
        //     "CEP": prestadorServicoDados.CEP,
        //     "number": prestadorServicoDados.number,
        //     "neighborhood": prestadorServicoDados.neighborhood,
        //     "locationState": prestadorServicoDados.locationState,
        //     "complement": prestadorServicoDados.complement,
        //     "city": prestadorServicoDados.city,
        //     "tipoCadastro": prestadorServicoDados.tipoCadastro,
        //     "descriptionAd": data.description,
        //     "servicesAd": data.ServicosOferecidos,
        //     "category": data.categorias.value,
        //     "whatsappContact": data.Whatsapp,
        //     "instagramContact": data.Instagram,
        //     "telephoneContact": data.Telefone
        // }
        register(userData, history)
    }

    return (

        <motion.div className='principal-box-cadastro'
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}>
            <div>
                <form action='' onSubmit={handleSubmit(data => { handleAnuncio(data) })}>
                    <div id='titulo'>
                        <h3 id='text-Principal'>Precisamos saber um pouco mais sobre você</h3>
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
                        <div className='my-3'>
                            <button id='button-suasInfos' type='submit' className='w-100 rounded text-light'>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}

export default AnuncioPage;