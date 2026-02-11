import "../../styles/styles.css"
export function LoginForm(){

    function abrirModalRecuperar() {
        const modal = document.getElementById('modal-recuperar');
        modal.classList.remove('hidden');
    }

    return(
       <div className="container auth-container">
    
        <div className="auth-box" id="login-box">
            <div className="header-auth">
                <i className="ph-fill ph-scissors icon-logo-grande"></i>
                <h1>Bem-vindo de volta</h1>
            </div>

            <form id="form-login">
                <div className="input-group">
                    <i className="ph ph-envelope-simple"></i>
                    <input type="email" id="login-email" placeholder="Seu e-mail" required />
                </div>

                <div className="input-group">
                    <i className="ph ph-lock-key"></i>
                    <input type="password" id="login-pass" placeholder="Sua senha" required />
                </div>

                <div className="actions-row">
                    <label className="lembrar">
                        <input type="checkbox" /> Lembrar de mim 
                    </label>
                    <a href="#" className="link-esqueci" onClick={abrirModalRecuperar}>Esqueceu a senha?</a>
                </div>

                <button type="submit" className="btn confirmar btn-full">ENTRAR</button>
            </form>

            <div className="footer-auth">
                <p>Não tem uma conta? <a href="#" id="link-criar">Crie agora</a></p>
            </div>
        </div>
    </div>
    );
}