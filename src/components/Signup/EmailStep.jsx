function EmailStep({ onNext, onBack }) {
    return (

        <div className="email-page">
            <div>
                {/* anti simbol back */}
                <button type="button" onClick={onBack}>Back</button>
                <div className="container">
                    <ul className="progress-bar">
                        <li className="active">•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                    </ul>
                </div>  
            </div>

            <div>
                <h1>What's your email?</h1>
                <input type="email" placeholder="Enter your email address" />
                <button type="button" onClick={onNext}>Next</button>
            </div>

            <div className="suggestion-container">
                <button type="button" className="btn-suggest">@gmail.com</button>
                <button type="button" className="btn-suggest">@hotmail.com</button>
                <button type="button" className="btn-suggest">@yahoo.com</button>
                <button type="button" className="btn-suggest">@outlook.com</button>
                <button type="button" className="btn-suggest">@icloud.com</button>
            </div>
    
        </div>

    )
}

export default EmailStep