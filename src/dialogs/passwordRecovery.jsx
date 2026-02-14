import { useState } from "react";
import { Input } from "../components/input";

export function PassRecoveryDialog({setOpen}){

    const [isDisabled, setIsDisabled] = useState(false);
    const [email, setEmail] = useState("");

    let innerText = isDisabled ? "Enviando..." : "Enviar link";

    function fecharModalRecuperar(){
        setOpen(false);
    }

    function solicitarRecuperacao(e) {
        e.preventDefault();

        if (!email) {
            showToast("Por favor, digite seu e-mail.", "erro");
            return;
        }

        //desativa o botão
        setIsDisabled(true);

        setTimeout(() => {
            // Fecha o modal
            fecharModalRecuperar();
            
            // Restaura botão
            setIsDisabled(false);

            // Feedback
            showToast(`Link de redefinição enviado para: ${email}`, "sucesso");
        }, 1500);
    }


    return(
        <div id="modal-recuperar" className="modal" >
            <div className="modal-box">
                <i className="ph-fill ph-lock-key-open icon-confirm"></i>
                <h2>Recuperar Senha</h2>
                <p style={{color: "#aaa", marginBottom: "20px", fontSize: "0.9rem"}}>
                    Digite seu e-mail abaixo para receber o link de redefinição.
                </p>
                
                <form onSubmit={(e) => solicitarRecuperacao(e)}>
                    <Input
                        iconClass="ph ph-envelope-simple"
                        type="email"
                        id="email-recuperar"
                        placeholder="Seu e-mail cadastrado"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <div className="modal-actions">
                        <button 
                            type="button" 
                            className="btn cancelar" 
                            onClick={() => setOpen(false)}>Cancelar</button>
                        
                        <button 
                            type="submit" 
                            className="btn confirmar" 
                            disabled={isDisabled}>{innerText}</button>
                    </div>
                </form>
            </div>
        </div>  
    );
}