import "./signup.css"

function GenderStep({ onNext, onBack }) {
    return (

        <div className="gender-page">

            <div>
                <button type="button" onClick={onBack}>Back</button>
                <div className="container">
                    <ul className="progress-bar">
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li className="active">•</li>
                        <li>•</li>
                        <li>•</li>
                    </ul>
                </div>  
            </div>

            <div>
                <h1>What's your gender?</h1>
                <p>This will influence the content you see. It won't be visible to others.</p>
                <button type="button" onClick={onNext}>Female</button>
                <button type="button" onClick={onNext}>Male</button>
                <button type="button" onClick={onNext}>Specify another</button>
            </div>

        </div>

    )
}

export default GenderStep