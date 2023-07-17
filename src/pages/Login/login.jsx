import './login.css'

function Login() {
  return (
    <>
     <div class="titulo">
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
     <input  class="caixaEmail"type="email" name="idemail" id="idemail" />
     </div>
     <div>
     <label class="senha"> Senha:</label>
     </div>
     <div/>
     <input class="CaixaSenha" type="password" name="idpassword" id="idpassword" />
     <div/>
     <div/>
     <input  class="CaixaMostraS"type="checkbox" name="idcheckbox" id="idcheckbox"/>
     <label  class="MostrarSenha" for="checkbox"> Mostrar senha </label>
     <label  class="EsqueceuSenha" for="checkbox"> Esqueceu a senha? </label>
     <div/>
     <div/>
     <button class="EntrarConta" type="button" form="F_Entrar">Entrar na Conta</button>
     <div/>
     <div/>
     <label class="NTemLogin"for="nome">Não tem login? <span class="sublinhado">cadastre-se</span> </label>
     <div/>
     <div> 
     <img class="img" src="logo.png" alt="minha logo"/>
     </div>
     <div>
      <img class="img2" src='imagem2.png2.png' alt="imagem"/>
     </div>
     <div> 
     <label class="bvp1" for="bem-vindo">Seja Bem-vindo ao MaoNaObra</label>
     </div>
     <div> 
     <label class="preencher" for="preencher">Preencha todos os dados corretamente</label>
     </div>
     <div class="backgroundTot">
     </div>
     </>

  )
}

export default Login

