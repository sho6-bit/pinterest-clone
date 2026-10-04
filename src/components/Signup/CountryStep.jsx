import "./signup.css"

function CountryStep({ onNext, onBack }) {
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
                        <li></li>
                        <li className="active"></li>
                        <li></li>
                    </ul>
                </div>  

            </div>

            <div className="signup-form">

                <h1>Where do you live?</h1>

                <p className="info-p">This helps us find you more relevant content. We won't show it on your profile.</p>
                {/* buat page yang membawa ke country, tapi last aja */}
                
                <button 
                className="country-option-button"
                type="text" 
                id="country"
                >
                    Indonesia ➜
                </button>

                <button 
                className="next-button" 
                type="button" 
                onClick={onNext}
                >
                    Next
                </button>
            
            </div>

        </div>

    )
}

export default CountryStep