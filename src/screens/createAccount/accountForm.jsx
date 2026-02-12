import "../../styles/styles.css"
import { Link } from "react-router-dom";
import { Input } from "../../components/input";

export function AccountForm(){
    return(
        <div className="container auth-container">
            <div className="auth-box" id="register-box">
                <div className="header-auth">
                    <i className="ph-fill ph-user-plus icon-logo-grande"></i>
                    <h1>Criar Conta</h1>
                    <p>Preencha seus dados para começar</p>
                </div>

                <form id="form-register">
                    <Input 
                        iconClass="ph ph-user"
                        type="text"
                        id="reg-nome"
                        placeholder="Nome completo"
                    />

                    <Input
                        iconClass="ph ph-envelope-simple"
                        type="email"
                        id="reg-email"
                        placeholder="Seu e-mail"
                    />

                    <Input
                        iconClass="ph ph-lock-key"
                        type="password"
                        id="reg-pass"
                        placeholder="Crie uma senha"
                    />

                    <Input
                        iconClass="ph ph-lock-key"
                        type="password"
                        id="reg-confirm"
                        placeholder="Confirme a senha"
                    />

                    <button type="submit" className="btn confirmar btn-full">CADASTRAR</button>
                </form>

                <div className="footer-auth">
                    <p>Já tem uma conta? <Link to="/login">Fazer login</Link></p>
                </div>
            </div>
        </div>
    );
}