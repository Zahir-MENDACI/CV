import React, { useState } from 'react';
import ProgressBar from './ProgressBar'

const Bureautique = () => {
    const [bureautique, setBureautique] = useState([
        {id: 1, value: "Word", xp:90},
        {id: 2, value: "Excel", xp:60},
        {id: 3, value: "PowerPoint", xp:80}
    ])
    return (
        <div className="bureautique">
            <ProgressBar
                data={bureautique}
                className="bureautiqueDisplay"
                title="bureautique"
            />
        </div>
    );
};

export default Bureautique;