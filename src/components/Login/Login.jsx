import "./login.css"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

function Login({ onBack }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-overlay">

            <div className="login-page">

                <header className="login-header">

                    <button
                        className="close-button"
                        onClick={onBack}
                    >
                        ×
                    </button>

                    <h1>Log In</h1>
                    
                </header>

                <div>

                    <button className="social-button">
                        <img 
                            src="src/assets/images-logo/Google-logo.png" 
                            alt="Google logo" 
                            className="button-logo"
                        />
                        Continue with Google
                    </button>

                    <button className="social-button">
                        <img 
                            src="src/assets/images-logo/Apple-logo.png" 
                            alt="Apple logo" 
                            className="button-logo"
                        />
                        Continue with Apple
                    </button>

                </div>


                <p className="OR">OR</p>

                <div className="input-field">

                    <label>Email</label>

                    <input
                        className="email-input"
                        type="email"
                    />

                </div>

                <div className="input-field">

                    <label>Password</label>

                    <div className="password-input-wrapper">
                        
                        <input
                            type={showPassword ? "text" : "password"} 
                        />

                        <button
                            type="button"
                            className="login-password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Eye /> : <EyeOff />}
                        </button>

                    </div>


                </div>

                <a href="#" src="">Forgot your password?</a>

                <button className="actual-login-button">
                    Log In
                </button>

            </div>

        </div>
    )
}

export default Login