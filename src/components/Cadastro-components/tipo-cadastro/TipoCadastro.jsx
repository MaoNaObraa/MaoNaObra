import './TipoCadastro.css'
import prestadorServico from '/prestadorServico-icon.png'
import cliente from '/cliente-icon.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from 'framer-motion';
import PreviousNextButtons from '../previous-next/PreviousNextButtons';

const TipoCadastro = () => {
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
                        <input type="checkbox" name="prestadorServico" id="prestadorServico" value="prestadorServico" className='hidden'/>
                        <label htmlFor="prestadorServico" id='prestadorServico-checkbox' className="tipo-cadastro-label d-flex align-items-center justify-content-center flex-column">
                            <img src={prestadorServico} width={80} className='mb-2'/>
                            <h3>Prestador de serviço</h3>
                            <p>Você quer divulgar seu serviço?</p>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" name="cliente" id="cliente" value="cliente" className='hidden'/>
                        <label htmlFor="cliente" id='cliente-checkbox' className="tipo-cadastro-label d-flex align-items-center justify-content-center flex-column" >
                            <img src={cliente} width={80} className='mb-2'/>
                            <h3>Cliente</h3>
                            <p>Você quer procurar um serviço?</p>
                        </label>
                    </div>
                </div>
                <div className='mt-4 d-flex align-items-center justify-content-between'>
                    <PreviousNextButtons link="/cadastro/dadosPessoais"/>
                    <PreviousNextButtons text="Proxima etapa" link="/" type="next"/>
                </div>
            </motion.div>
        </>
     );
}
 
export default TipoCadastro;