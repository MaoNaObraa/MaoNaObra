import Input from '../../components/input/Input'
import './login.css'

function Login() {
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
              <img src="logo.png" width='90' alt="" />
              <div className='text-center'>
                <h2 className='mt-3' >Seja bem vindo</h2>
                <p>Digite os dados para realizar o login</p>
              </div>
            </div>

            <form action="" className='mt-3' id="forms-login">
              <Input id='email' label="Email:" type="email" nome='email' placeholder="Digite seu e-mail"/>
              <Input id='senha' label="Senha:" type="password" nome='senha' placeholder="Digite sua senha"/>
            </form>

            <div id='opcoes-login' className='d-flex align-items-center justify-content-between'>
              <div>
                <input type="checkbox" name="mostrarSenha" id="mostrarSenha"/>
                <label htmlFor="mostrarSenha" className='p-2'>Mostrar senha</label>
              </div>

              <div id='esqueceu-senha'>
                <a href="google.com">Esqueceu senha?</a>
              </div>
            </div>

            <div id="botao-login" className='w-100 mt-2'>
              <button className='rounded text-light'>Entrar na conta</button>
            </div>


            <div id='cadastro-login' className='text-center mt-4'>
              <h6>Não tem login? <a href="" id='cadastre-se-login'>Cadastre-se</a></h6>
            </div>
          </div>
        </div>
      </main>


    </>

  )
}

export default Login
