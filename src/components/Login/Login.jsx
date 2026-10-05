function Login({ onBack }) {
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

                <button className="social-button">
                    Continue with Google
                </button>

                <button className="social-button">
                    Continue with Apple
                </button>

                <p className="OR">OR</p>

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <button className="login-button">
                    Log In
                </button>

            </div>

        </div>
    )
}

export default Login