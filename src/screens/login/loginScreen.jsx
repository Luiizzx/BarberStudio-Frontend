import "../../styles/styles.css"
import { Footer } from "../../components/footer.jsx";
import { LoginForm }from "./loginForm.jsx";

export function LoginScreen(){
    return (
        <div>
            <LoginForm />
            <Footer />
        </div>
    );
}