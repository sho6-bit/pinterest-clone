import { useState } from "react"
import Gateway from "./components/Gateway/Gateway.jsx"
import Signup from "./components/Signup/Signup.jsx"
import Signup from "./components/Login/Login.jsx"

function App() {
    const [page, setPage] = useState("gateway")
    const [showLogin, setShowLogin] = useState(false)

    return (

        <>

            {page === "gateway" && (
                <Gateway 
                onSignup={() => setPage("signup")}
                onLogin={() => setShowLogin(true)}
                />
            )}

            {page === "signup" && (
                <Signup onBack={() => setPage("gateway")}/>
            )}

            {showLogin && (
                <Login onBack={() => setShowLogin(false)}/>
            )}
            
        </>

    );
}

export default App;