function BirthdateStep({ onNext, onBack }) {
    return(

        <div className="birthdate-page">

            <div>
                <button type="button" onClick={onBack}>Back</button>
                <div className="container">
                    <ul className="progress-bar">
                        <li>•</li>
                        <li>•</li>
                        <li className="active">•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                    </ul>
                </div>  
            </div>

            <div>
                <input type="text" placeholder="Enter your full name" />
                <button type="submit">Update</button>
            </div>
            
            <div>
                <h1>Enter your birthdate</h1>
                <input type="date" id="birth-date" />
                <p>Knowing your age helps keeps Pinterest safe for everyone. It won't be visible to others.</p>
                <p>Use your own birthdate, even if this a business account.</p>
                <button type="button" onClick={onNext}>Next</button>
            </div>

        </div>

    )
}             

export default BirthdateStep