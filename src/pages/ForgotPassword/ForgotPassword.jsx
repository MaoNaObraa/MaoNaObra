import './ForgotPassword.css'

const ForgotPassword = () => {
    return ( 
        <>
            <div class="head">
            <img src="./logo.png" alt="" class="icon">
            <div class="text">MãoNaObra</div>
        </div>
        <div class="caixa"> 
            <div class="caixa-titulo"> 
                Esqueceu sua senha?
            </div>
            <div class="caixa-subtitulo">
                Digite seu endereço de e-mail para redefinir sua senha.
            </div>
            <div class="caixa-input">
                <input type="email" id="email" placeholder="E-mail"/>
            </div>
            <div class="botao">
                Recuperar senha

            </div>
        </div>
        </>
    );
}
 
export default ForgotPassword;
