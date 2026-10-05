import "./signup.css"
import { useEffect, useRef, useState} from "react";

function EmailStep({ onNext, onBack }) {
    const emailInput = useRef(null);
    const [email, setEmail] = useState ("")

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    useEffect(() => {
        emailInput.current?.focus()
    }, [])

    const addDomain = (domain) => {
        setEmail((currentEmail) => {
            if (currentEmail.includes("@")) {
                return currentEmail.split("@")[0] + domain
            }

            return currentEmail + domain

        })

        emailInput.current?.focus()

    }

    return (

        <main className="page">

            <div>

                <div className="signup-header">

                    <button className="back-button" onClick={onBack}>
                        <span></span>
                    </button>

                    <div className="container">
                        <ul className="progress-bar">
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> 

                </div>

                <div className="signup-form">

                    <h1>What's your email?</h1>
                    
                    <input 
                        ref={emailInput}
                        type="email" 
                        placeholder="Enter your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                        className="next-button" 
                        type="button" 
                        onClick={onNext}
                        disabled={!isValidEmail}
                    >
                        Next
                    </button>

                </div>

                <div className="suggestion-container">

                    <button 
                        type="button" 
                        className="btn-suggest"
                        onClick={() => addDomain("@gmail.com")}
                    >
                        @gmail.com
                    </button>

                    <button 
                        type="button" 
                        className="btn-suggest"
                        onClick={() => addDomain("@hotmail.com")}
                    >
                        @hotmail.com
                    </button>

                    <button 
                        type="button" 
                        className="btn-suggest"
                        onClick={() => addDomain("@yahoo.com")}
                    >
                        @yahoo.com
                    </button>

                    <button 
                        type="button" 
                        className="btn-suggest"
                        onClick={() => addDomain("@outlook.com")}
                    >
                        @outlook.com
                    </button>

                    <button 
                        type="button" 
                        className="btn-suggest"
                        onClick={() => addDomain("@icloud.com")}
                    >
                        @icloud.com
                    </button>

                </div>
        
            </div>

        </main>

    )
}

export default EmailStep