import './SuasInformacoes.css'
import Input from '../../../components/input/Input'
import PreviousNextButtons from '../previous-next/PreviousNextButtons';
import { motion } from 'framer-motion';

const SuasInformacoes = () => {
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
                    <form action="">
                        <Input id="nome-completo" label="Nome completo:" type="text" nome="nomeCompleto" placeholder="Digite seu nome completo" value="" onchange="" />
                        <Input id="email" label="E-mail:" type="text" nome="email" placeholder="Digite seu e-mail" value="" onchange="" />
                        <Input id="celular" label="Celular:" type="text" nome="celular" placeholder="Digite seu celular" value="" onchange="" />
                        <div className='d-flex w-100 justify-content-between'>
                            <div style={{ width: "49%" }}><Input id="senha-cadastro" label="Senha:" type="text" nome="senha" placeholder="Digite sua senha" value="" onchange="" /></div>
                            <div style={{ width: "49%" }}><Input id="senha-confirm-cadastro" label="Confirmar senha:" type="text" nome="senhaConfirm" placeholder="Digite sua senha novamente" value="" onchange="" /></div>
                        </div>
                    </form>
                </div>

                <div className='mt-4 d-flex align-items-center justify-content-between'>
                    <div></div>
                    <PreviousNextButtons text="Proxima etapa" link="/cadastro/dadosPessoais" type="next"/>
                </div>
            </motion.div>
        </>
    );
}

export default SuasInformacoes;