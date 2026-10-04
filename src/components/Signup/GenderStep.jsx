import "./signup.css"

function GenderStep({ onNext, onBack }) {
    return (

        <div className="page">

            <div className="signup-header">

                <button className="back-button" onClick={onBack}>
                    <span></span>
                </button>

                <div className="container">
                    <ul className="progress-bar">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> 

            </div>

            <div className="signup-form">

                <h1>What's your gender?</h1>
                <p className="info-p">This will influence the content you see. It won't be visible to others.</p>
                
                <div className="gender-option">

                    <button 
                        className="gender-button" 
                        type="button" 
                        onClick={onNext}
                    >
                        Female
                    </button>

                    <button 
                        className="gender-button" 
                        type="button" 
                        onClick={onNext}
                    >
                        Male
                    </button>

                    <button 
                        className="gender-button" 
                        type="button" 
                        onClick={onNext}
                    >
                        Specify another
                    </button>

                </div>
            
            </div>

        </div>

    )
}

export default GenderStep