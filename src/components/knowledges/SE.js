import React, { useState } from 'react';
import ProgressBar from './ProgressBar'


const SE = () => {

    const [se, setSe] = useState([
        {id: 1, value: "Windows", xp:80},
        {id: 2, value: "Linux", xp:60},
        {id: 3, value: "Android", xp:90},
        {id: 4, value: "iOS", xp:90},
    ])

    return (
        <div className="se">
            <ProgressBar
                data={se}
                className="seDisplay"
                title="Systèmes d'Exploitation"
            />
        </div>
    );
};

export default SE;