import Input from "../../input/Input";
import './DadosPessoais.css'
import PreviousNextButtons from "../previous-next/PreviousNextButtons";
import { motion } from "framer-motion";
import { useState } from 'react'

const DadosPessoais = () => {

    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [cep, setCep] = useState('')
    const [estado, setEstado] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [complemento, setComplemento] = useState('')

    function enviar() {
        console.log(endereco)
        console.log(numero)
        console.log(cep)
        console.log(estado)
        console.log(bairro)
        console.log(cidade)
        console.log(complemento)
      }

    return (
        <>

       

            <motion.div className='principal-box-cadastro d-flex flex-column justify-content-between dadosPessoais'
            initial={{y: -200}}
            animate={{ y: 0}}
            exit={{y:-200}}>
                <div className='first-text-cadastro mb-2'>
                    <h2 className='text-principal'>Dados pessoais</h2>
                    <p>Insira seus dados pessoais para melhor segurança</p>
                </div>

                <div>
                    <form action="">
                        <div className='d-flex w-100 justify-content-between'>
                            <div style={{ width: "49%" }}><Input id="cpf" label="CPF" type="text" nome="cpf" placeholder="Digite seu cpf" value="" onchange="" /></div>
                            <div style={{ width: "49%" }}><Input id="rg" label="RG" type="text" nome="rg" placeholder="Digite seu RG" value="" onchange="" /></div>
                        </div>
                        <Input id="dataNascimento" label="Data de nascimento" type="date" nome="dataNascimento" placeholder="Digite sua data de nascimento" value="" onchange="" />
                    </form>
                </div>

                <div className="mt-2">
                    <div className='first-text-cadastro mb-3'>
                        <h2 className='text-principal'>Endereço</h2>
                        <p>Insira seu endereço para melhor segurança</p>
                    </div>
                    <div className='d-flex w-100 justify-content-between'>
                            <div style={{ width: "80%" }}><Input id="endereco" label="Endereço" type="text" nome="endereco" placeholder="" value={endereco} onchange={(event) => { setEndereco(event.target.value) }} /></div>
                            <div style={{ width: "19%" }}><Input id="numero" label="Número" type="text" nome="numero" placeholder="Digite o número" value={numero} onchange={(event) => { setNumero(event.target.value) }} /></div>
                    </div>
                    <div className='d-flex w-100 justify-content-between'>
                            <div style={{ width: "49%" }}><Input id="cep" label="CEP" type="text" nome="cep" placeholder="Digite seu CEP" value={cep} onchange={(event) => { setCep(event.target.value) }} /></div>
                            <div style={{ width: "49%" }}><Input id="estado" label="Estado" type="text" nome="estado" placeholder="Digite o seu estado" value={estado} onchange={(event) => { setEstado(event.target.value) }} /></div>
                    </div>
                    <div className='d-flex w-100 justify-content-between'>
                            <div style={{ width: "49%" }}><Input id="bairro" label="Bairro" type="text" nome="bairro" placeholder="Digite seu bairro" value={bairro} onchange={(event) => { setBairro(event.target.value) }} /></div>
                            <div style={{ width: "49%" }}><Input id="cidade" label="Cidade" type="text" nome="cidade" placeholder="Digite a sua cidade" value={cidade} onchange={(event) => { setCidade(event.target.value) }} /></div>
                    </div>
                    <Input id="complemento" label="Complemento:" type="text" nome="complemento" placeholder="Digite o complemento" value={complemento} onchange={(event) => { setComplemento(event.target.value) }} />
                </div>

                <div className='mt-4 d-flex align-items-center justify-content-between'>
                    <PreviousNextButtons link="/cadastro/suasInformacoes"/>
                    <PreviousNextButtons text="Proxima etapa" link="/cadastro/tipoCadastro" type="next" onclick={enviar}/>
                </div>
            </motion.div>
        </>
    );
}

export default DadosPessoais;