function PasswordStep({ onNext, onBack }) {
    return (

        <div className="password-page">

            <div>
                <button type="button" onClick={onBack}>Back</button>
                <div className="container">
                    <ul className="progress-bar">
                        <li>•</li>
                        <li className="active">•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                    </ul>
                </div>  
            </div>

            <div>
                <h1>Create a password</h1>
                {/* bikin fuction show password, ganti nama function, saat di input ada indikator
                yang menyatakan seberapa strong password yang dibuat pengguna, ada juga password tips */}
                Password<input type="password" placeholder="Create a strong password" />
                <input type="checkbox" /> Show Password
                <button type="button" onClick={onNext}>Next</button>
            </div>
        
        </div>

    )
}

export default PasswordStep