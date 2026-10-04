import "./signup.css"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

function PasswordStep({ onNext, onBack }) {
    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="page">

            <div className="signup-header">

                <button className="back-button" onClick={onBack}>
                    <span></span>
                </button>

                <div className="container">
                    <ul className="progress-bar">
                        <li></li>
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>

            <div className="signup-form">

                <h1>Create a password</h1>
                {/* bikin fuction show password, ganti nama function, saat di input ada indikator
                yang menyatakan seberapa strong password yang dibuat pengguna, ada juga password tips */}
                
                <div className="password-input">

                     <p>Password</p>

                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Create a strong password" 
                    />

                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <Eye /> : <EyeOff />}
                    </button>

                </div>

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

export default PasswordStep