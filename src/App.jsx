import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "./screens/login/loginScreen.jsx";
import { CreateAccountScreen } from "./screens/createAccount/createAccountScreen.jsx";

export function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />}/>
                <Route path="/create" element={<CreateAccountScreen />} />
            </Routes>
        </BrowserRouter>
    );
}