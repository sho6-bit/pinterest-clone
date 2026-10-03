function CountryStep({ onNext, onBack }) {
    return (

        <div className="sign-up5">

            <div>
                <button type="button" onClick={onBack}>Back</button>
                <div className="container">
                    <ul className="progress-bar">
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li className="active">•</li>
                        <li>•</li>
                    </ul>
                </div>  
            </div>

            <div>
                <h1>Where do you live?</h1>
                <p>This helps us find you more relevant content. We won't show it on your profile.</p>
                {/* buat page yang membawa ke country, tapi last aja */}
                <input type="text" id="country" />
                <button type="button" onClick={onNext}>Next</button>
            </div>

        </div>

    )
}

export default CountryStep