import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Interets</h3>
            <ul className="hobbiesContainer">
                <div className="hobby">
                    <div>
                        <i className="fas fa-running"></i>
                        <span>Autoformation</span>
                    </div>
                    <div>
                        <i className="fas fa-hiking"></i>
                        <span>Sport (Vo-Vietnam, Footing, Musculation)</span>
                    </div>
                </div>
                <div className="hobby">
                    <div>
                        <i className="fas fa-running"></i>
                        <span>Jeux Vidéos (FPS, Sport, Aventure et Stratégie)</span>
                    </div>
                    <div>
                        <i className="fas fa-hiking"></i>
                        <span>Musique</span>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Hobbies;