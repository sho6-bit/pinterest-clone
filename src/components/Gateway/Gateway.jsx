import "./gateway.css"

function Gateway({ onSignup }) {
    return (
        
        <main className="gateway-page">

            <div>

                <div className="collage-background">

                    <div className="collage-background-1">
                        <img src="image1.jpg" alt="Image 1" />
                        <img src="image2.jpg" alt="Image 2" />
                        <img src="image3.jpg" alt="Image 3" />
                    </div>

                    <div className="collage-background-2">
                        <img src="image4.jpg" alt="Image 4" />
                        <img src="image5.jpg" alt="Image 5" />
                        <img src="image6.jpg" alt="Image 6" />
                    </div>

                    <div className="collage-background-3">
                        <img src="image7.jpg" alt="Image 7" />
                        <img src="image8.jpg" alt="Image 8" />
                        <img src="image9.jpg" alt="Image 9" />
                    </div>
                    
                </div>

                <div className="gateway-btn">
                    <img src="pinterest-logo.png" alt="Pinterest Logo" />
                    <h2>Create a life you love</h2>
                    <button onClick={onSignup}>Sign Up</button>
                    <button>Log In</button>
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

