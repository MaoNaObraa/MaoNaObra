import { useState } from 'react'
import Input from '../../components/input/Input'
import './login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function Login() {
  //      get     set
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function enviar() {
    console.log(email)
    console.log(senha)
  }

  function ValidarEmail(){

  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

  console.log (regexEmail.test(email))
  

}

 
  

  function Mostrarsenha() {
    var caixaSenha = document.getElementById("senha")
    if (caixaSenha.type === "password") {
      caixaSenha.type = "text"
    } else {
      caixaSenha.type = "password"
    }
  }


  return (
    <>
      <main className='d-flex'>
        <div id='side-blue' className='d-flex flex-column justify-content-center align-items-center'>
          <div className='text-light mb-5' id='bem-vindo-side-blue'>
            <h3>Seja bem vindo ao MãoNaObra</h3>
            <p>Preencha todos os <br /> dados corretamente</p>
          </div>

          <div>
            <img src="./bg-login.png" width='500' alt="" />
          </div>
        </div>

        <div id='form-login' className='d-flex justify-content-center align-items-center'>

          <div>
            <div id='logo-login' className='d-flex flex-column align-items-center'>
              <Link to="/"><img src="logo.png" width='90' alt="" /></Link>
              <div className='text-center'>
                <h2 className='mt-3' >Seja bem vindo</h2>
                <p>Digite os dados para realizar o login</p>
              </div>
            </div>

            <form action="" className='mt-3' id="forms-login" >
              <Input   id='email' label="Email:" type="email" nome='email' placeholder="Digite seu e-mail" onblur={ValidarEmail}  value={email} onchange={(event) => { setEmail(event.target.value) }} />
              <Input   id='senha' label="Senha:" type='password' nome='senha' placeholder="Digite sua senha"  value={senha} onchange={(event) => { setSenha(event.target.value) }} />
            </form>

            <div id='opcoes-login' className='d-flex align-items-center justify-content-between'>
              <div>
                <input type="checkbox" name="mostrarSenha" id="mostrarSenha" onClick={Mostrarsenha} />
                <label htmlFor="mostrarSenha" className='p-2' class='nomeMostrar'>Mostrar senha</label>
              </div>

              <div id='esqueceu-senha'>
                <Link to="/recuperarSenha">Esqueceu senha?</Link>
              </div>
            </div>

            <div id="botao-login" className='w-100 mt-2'>
              <button className='rounded text-light' onClick={enviar}>Entrar na conta</button>
            </div>


            <div id='cadastro-login' className='text-center mt-4'>
              <h6>Não tem login? <Link to="/cadastro/suasInformacoes" id='cadastre-se-login'>Cadastre-se</Link></h6>
            </div>
          </div>
        </div>
      </main>


    </>

  )
  }

export default Login
