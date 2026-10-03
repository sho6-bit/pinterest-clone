import "./gateway.css"

function Gateway({ onSignup }) {
    return (
        
        <main className="gateway-page">

            <div>

                <div className="collage-background">
                    
                        <img src="src/assets/images-bg/image1bg.jpeg" alt="Background Image 1" />
                        <img src="src/assets/images-bg/image2bg.jpeg" alt="Background Image 2" />
                        <img src="src/assets/images-bg/image3bg.jpeg" alt="Background Image 3" />
                    
                        <img src="src/assets/images-bg/image4bg.jpeg" alt="Background Image 4" />
                        <img src="src/assets/images-bg/image5bg.jpeg" alt="Background Image 5" />
                        <img src="src/assets/images-bg/image6bg.jpeg" alt="Background Image 6" />
                                        
                        <img src="src/assets/images-bg/image7bg.jpeg" alt="Background Image 7" />
                        <img src="src/assets/images-bg/image8bg.jpeg" alt="Background Image 8" />
                        <img src="src/assets/images-bg/image9bg.jpeg" alt="Background Image 9" />
                                       
                </div>

                <div className="gateway-menu">
                    <img src="src/assets/images/pinterest-logo.png" alt="Pinterest Logo" />
                    <h2>Create a life you love</h2>
                    <button className="signup-button" onClick={onSignup}>
                        Sign Up
                    </button>
                    <button className="login-button">
                        Log In
                    </button>
                    <p>You must be at least 16 years old to use Pinterest. By continuing, you agree to Pinterest's 
                        <a href="#">Terms of Service</a>, and acknowledge you've read our 
                        <a href="#">Privacy Policy</a>. 
                        <a href="#">Notice at Collection</a>.
                    </p>
                </div>

            </div>

        </main>

    )
}

export default Gateway

