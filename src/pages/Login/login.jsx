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

            <form action="" className='mt-3'>
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



      {/* <div class="titulo">
        <h1>Seja Bem-vindo!</h1>
      </div>
      <div class="Background">
      </div>
      <div>
        <label class="DadosL" for="nome">Digite os dados para fazer login</label>
      </div>
      <div>
        <label class="email" for="nome"> E-mail:</label>
      </div>
      <div>
        <input class="caixaEmail" type="email" name="idemail" id="idemail" />
      </div>
      <div>
        <label class="senha"> Senha:</label>
      </div>
      <div />
      <input class="CaixaSenha" type="password" name="idpassword" id="idpassword" />
      <div />
      <div />
      <input class="CaixaMostraS" type="checkbox" name="idcheckbox" id="idcheckbox" />
      <label class="MostrarSenha" for="checkbox"> Mostrar senha </label>
      <label class="EsqueceuSenha" for="checkbox"> Esqueceu a senha? </label>
      <div />
      <div />
      <button class="EntrarConta" type="button" form="F_Entrar">Entrar na Conta</button>
      <div />
      <div />
      <label class="NTemLogin" for="nome">Não tem login? <span class="sublinhado">cadastre-se</span> </label>
      <div />
      <div>
        <img class="img" src="logo.png" alt="minha logo" />
      </div>
      <div>
        <img class="img2" src='imagem2.png2.png' alt="imagem" />
      </div>
      <div>
        <label class="bvp1" for="bem-vindo">Seja Bem-vindo ao MaoNaObra</label>
      </div>
      <div>
        <label class="preencher" for="preencher">Preencha todos os dados corretamente</label>
      </div>
      <div class="backgroundTot">
      </div> */}
    </>

  )
}

export default Login