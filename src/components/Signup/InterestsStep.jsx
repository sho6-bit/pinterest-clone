import { Search, Camera } from "lucide-react"
import "./signup.css"

function Interests({ onBack, onNext }) {
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
                        <li></li>
                        <li className="active"></li>
                    </ul>
                </div>  

            </div>

            <div className="signup-form">

                <h1>What are you in the mood to do?</h1>
                <p>Pick 3 or more to curate your experience</p>

            </div>

            <div className="interests-container">

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Hair-inspiration.jpeg" alt="Hair inspiration" />
                    <span>Hair inspiration</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Relaxtion.jpeg" alt="Relaxtion" />
                    <span>Relaxtion</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Drawing.jpeg" alt="Drawing" />
                    <span>Drawing</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Video-games-customization.jpeg" alt="Video games customization" />
                    <span>Video-games-customization</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/DIY-projects.jpeg" alt="DIY projects" />
                    <span>DIY-projects</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Weddings.jpeg" alt="Weddings" />
                    <span>Weddings</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Photography.jpeg" alt="Photography" />
                    <span>Photography</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Cars.jpeg" alt="Cars" />
                    <span>Cars</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Cute-animals.jpeg" alt="Cute animals" />
                    <span>Cute animals</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Nail-trends.jpeg" alt="Nail trends" />
                    <span>Nail trends</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Aesthetics.jpeg" alt="Aesthetics" />
                    <span>Aesthetics</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Travel.jpeg" alt="Travel" />
                    <span>Travel</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Sneakers.jpeg" alt="Sneakers" />
                    <span>Sneakers</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Cute-greetings.jpeg" alt="Cute greetings" />
                    <span>Cute greetings</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Tattoos.jpeg" alt="Tattoos" />
                    <span>Tattoos</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Workouts.jpeg" alt="Workouts" />
                    <span>Workouts</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Party-ideas.jpeg" alt="Party ideas" />
                    <span>Party ideas</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Home-renovation.jpeg" alt="Home renovation" />
                    <span>Home renovation</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Plants.jpeg" alt="Plants" />
                    <span>Plants</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Anime-and-comics.jpeg" alt="Anime and comics" />
                    <span>Anime and comics</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Phone-wallpapers.jpeg" alt="Phone wallpapers" />
                    <span>Phone wallpapers</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Pop-culture.jpeg" alt="Pop culture" />
                    <span>Pop culture</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Home-decor.jpeg" alt="Home decor" />
                    <span>Home decor</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Baking.jpeg" alt="Baking" />
                    <span>Baking</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Quotes.jpeg" alt="Quotes" />
                    <span>Quotes</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Cooking.jpeg" alt="Cooking" />
                    <span>Cooking</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Classroom-ideas.jpeg" alt="Classroom ideas" />
                    <span>Classroom ideas</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Outfit-ideas.jpeg" alt="Outfit ideas" />
                    <span>Outfit deas</span>
                </button>

                <button class="interest-card" type="button">
                    <img src="/src/assets/images-interests/Small-spaces.jpeg" alt="Small spaces" />
                    <span>Small spaces</span>
                </button>

            </div>

            <div className="signup-form">

                <h3>Looking for something else?</h3>

                <div className="search-bar">

                    <Search className="search-icon" size={18} />

                    <input 
                        type="text" 
                        placeholder="Search" 
                    /> 

                    <button className="camera-button">
                        <Camera size={18} />
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

export default Interests