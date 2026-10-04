import "./signup.css"
import { useEffect, useRef } from "react";

function EmailStep({ onNext, onBack }) {
    const emailInput = useRef(null);

    useEffect(() => {
        emailInput.current?.focus()
    }, [])

    return (

        <main className="email-page">

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
                    />
                    <button 
                        className="next-button" 
                        type="button" 
                        onClick={onNext}
                    >
                        Next
                    </button>

                </div>

                <div className="suggestion-container">
                    <button type="button" className="btn-suggest">@gmail.com</button>
                    <button type="button" className="btn-suggest">@hotmail.com</button>
                    <button type="button" className="btn-suggest">@yahoo.com</button>
                    <button type="button" className="btn-suggest">@outlook.com</button>
                    <button type="button" className="btn-suggest">@icloud.com</button>
                </div>
        
            </div>

        </main>

    )
}

export default EmailStep