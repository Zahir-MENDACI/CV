import React from 'react';
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="notFound">
            <h3>Cette page n'existe pas</h3>
            <NavLink exact to="/">
                <span>Accueil</span>
            </NavLink>
        </div>
    );
};

export default NotFound;