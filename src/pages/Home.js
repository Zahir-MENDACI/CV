import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Zahir MENDACI</h1>
                    <h2>Master 1 Expert en Développement Logiciel Mobile et IoT</h2>
                    <h3>Paris YNOV Campus</h3>
                    <div className="pdf">
                        <a href="https://cvdesignr.com/p/600eb21e90683" target="_blank"> Telecharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;