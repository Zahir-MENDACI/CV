import React, { useState } from 'react';
import ProgressBar from './ProgressBar'

const Bdd = () => {
    const [bdd, setBdd] = useState([
        {id: 1, value: "MySQL", xp:80},
        {id: 2, value: "Oracle", xp:30},
    ])
    return (
        <div className="bdd">
            <ProgressBar
                data={bdd}
                className="bddDisplay"
                title="Bases de Données"
            />
        </div>
    );
};

export default Bdd;