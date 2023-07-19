import './cadastro.css'

const Cadastro = () => {
    return ( 
        <>
            <div class="container">
        <div class="sidebar">
            <div class="logotipo">
                <img src="img/logotipo.jpeg" alt="Logotipo">
            </div>
            <div class="etapas-container">
                <div class="etapa">
                    <div class="etapa-simbolo ativo">1</div>
                    <div class="informacoes-etapa">
                        <small>Primeiro passo</small>
                        <h3>Suas informações</h3>
                    </div>
                </div>
                <div class="etapa">
                    <div class="etapa-simbolo">2</div>
                    <div class="informacoes-etapa">
                        <small>Segundo passo</small>
                        <h3>Dados pessoais</h3>
                    </div>
                </div>
                <div class="etapa">
                    <div class="etapa-simbolo">3</div>
                    <div class="informacoes-etapa">
                        <small>Terceiro passo</small>
                        <h3>Tipo de cadastro</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="formulario-container">
            <div class="informacoes-formulario">
                <h1>Suas Informações: </h1>
                <p>Insira suas informaçõe básicas para o cadastro:</p>
            </div>
            <div class="foto-container">
                <div class="foto">
                    <img src="img/user-picture.png" alt="Foto do usuário">
                </div>
                <div class="informacoes-foto">
                    <h2>Clique aqui...</h2>
                    <p>Outros textos...</p>
                </div>
            </div>
            <div class="formulario">
                <form action="#">
                    <div class="input-group">
                        <label for="firstaname">Nome Completo: </label>
                        <input id="firstaname" type="text" name="firstaname" placeholder="Digite seu nome completo"
                            required>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <label for="Number">Celular: </label>
                            <input id="Number" type="text" name="Number" placeholder="(xx)xxxxx-xxxx" required>
                        </div>
                        <div class="input-group">
                            <label for="Number">Celular: </label>
                            <input id="Number" type="text" name="Number" placeholder="(xx)xxxxx-xxxx">
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="email">E-mail: </label>
                        <input id="email" type="email" name="email" placeholder="Digite seu E-mail" required>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <label for="senha">Senha:</label>
                            <input id="password" type="password" name="password" placeholder="Digite Sua Senha"
                                required>
                        </div>
                        <div class="input-group">
                            <label for="confirmpassword">Confirma Senha: </label>
                            <input id="confirmpassword" type="password" name="confirmpassword"
                                placeholder="Confirme sua senha" required>
                        </div>
                    </div>
                    <div class="continue-button">
                        <button id="proxima-etapa">Próxima etapa</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </>
    );
}
 
export default Cadastro;
