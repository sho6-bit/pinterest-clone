import { useState } from "react";
import Gateway from "./components/Gateway/Gateway.jsx";
import Signup from "./components/Signup/Signup.jsx";

function App() {
    const [page, setPage] = useState("gateway");

    return (

        <>

            {page === "gateway" && (
                <Gateway onSignup={() => setPage("signup")}/>
            )}

            {page === "signup" && (
                <Signup onBack={() => setPage("gateway")}/>
            )}
            
        </>

    );
}

export default App;