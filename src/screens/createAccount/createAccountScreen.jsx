import "../../styles/styles.css"
import { Footer } from "../../components/footer";
import { AccountForm } from "./accountForm";

export function CreateAccountScreen(){
    return(
        <div>
            <AccountForm />
            <Footer />
        </div>
    );
}