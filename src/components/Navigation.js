import React from 'react';
import {NavLink} from 'react-router-dom'
import photo from '../Photo.png'

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={photo} />
                    <h3>Zahir MENDACI</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <img src="image/Home.svg" className="icon"/>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <img src="image/Dev.svg" className="icon"/>
                            <span>Competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <img src="image/Portfolio.svg" className="icon"/>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <img src="image/Contact.svg" className="icon"/>
                            <span>Contact</span>
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/zahir-mendaci/">
                            <img src="image/Linkedin.svg" className="SNicon"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Zahir-MENDACI/">
                            <img src="image/GitHub.svg" className="SNicon"/>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Zahir MENDACI - 2021</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;