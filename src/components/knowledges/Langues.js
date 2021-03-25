import React, { useState } from 'react';
import ProgressBar from './ProgressBar'

const Langues = () => {
    const [langues, setLangues] = useState([
        {id: 1, value: "Français", xp:90},
        {id: 2, value: "Anglais", xp:60},
        {id: 3, value: "Kabyle", xp:100},
        {id: 4, value: "Arabe", xp:90},
    ])

    return (
        <div className="langues">
            <ProgressBar
                data={langues}
                className="languesDisplay"
                title="Langues"
            />
        </div>
    );
};

export default Langues;