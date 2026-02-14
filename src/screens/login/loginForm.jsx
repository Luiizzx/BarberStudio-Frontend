import "../../styles/styles.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { PassRecoveryDialog } from "../../dialogs/passwordRecovery";
import { Toast } from "../../dialogs/toast";

export function LoginForm(){

    const [open, setOpen] = useState(false);
    const [toast, setToast] = useState({
        message: "",
        type: "",
        open: false
    });

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    function onChange(e) {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function openRecoveryDialog(e){
        e.preventDefault();
        setOpen(true);
    }

    function triggerToast(message, type){
        setToast({
            message: message,
            type: type,
            open: true
        });

        setTimeout(() => {
            setToast(prev => ({ ...prev, open: false }));
        }, 3000);
    }

    // adicionar integração para o login
    async function handleLogin() {
        if (values.email && values.password.length >= 6) {
            triggerToast("Bem-vindo de volta!", "success");
        } 
        else {
            triggerToast("E-mail ou senha inválidos", "error");
        }
    }

    return(
       <div className="container auth-container">
        {toast.open && 
            <Toast message={toast.message} type={toast.type}/>}

        {open && 
            <PassRecoveryDialog setOpen={setOpen} />}
        
        <div className="auth-box" id="login-box">
            <div className="header-auth">
                <i className="ph-fill ph-scissors icon-logo-grande"></i>
                <h1>Bem-vindo de volta</h1>
            </div>

            <form id="form-login">
                <Input
                    iconClass="ph ph-envelope-simple"
                    type="email"
                    id="login-email"
                    placeholder="Seu e-mail"
                    name="email"
                    value={values.email}
                    onChange={(e) => onChange(e)}
                />

                <Input
                    iconClass="ph ph-lock-key"
                    type="password"
                    id="login-pass"
                    placeholder="Sua senha"
                    name="password"
                    value={values.password}
                    onChange={(e) => onChange(e)}
                />

                <div className="actions-row">
                    <label className="lembrar">
                        <input type="checkbox"/> Lembrar de mim 
                    </label>
                    <a href="" className="link-esqueci" onClick={(e) => openRecoveryDialog(e)}>Esqueceu a senha?</a>
                </div>

                <button type="submit" className="btn confirmar btn-full" onClick={handleLogin}>ENTRAR</button>
            </form>

            <div className="footer-auth">
                <p>Não tem uma conta? <Link to="/create">Crie agora</Link></p>
            </div>
        </div>
    </div>
    );
}