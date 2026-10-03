function Interests({ onBack }) {
    return (

        <div className="interests-page">
                    
            <div>
                <button type="button" onClick={onBack}>Back</button>
                <div className="container">
                    <ul className="progress-bar">
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li className="active">•</li>
                    </ul>
                </div>  
            </div>

            <div>
                <h1>What are you in the mood to do?</h1>
                <p>Pick 3 or more to curate your experience</p>
            </div>

            {/* <div>
                Interest options will be added here
            </div> */}

            <div>
                <h3>Looking for something else?</h3>
                <input type="text" placeholder="Search" /> 
                {/* kasih logo search dan camera di dalam input field */}
                 <button type="button">Next</button>
            </div>
            
        </div>
    )
}

export default Interests