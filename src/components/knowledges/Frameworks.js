import React, { useState } from 'react';
import ProgressBar from './ProgressBar'

const Frameworks = () => {
    const [frameworks, setFrameworks] = useState([
        {id: 1, value: "React Js", xp:70},
        {id: 2, value: "Redux", xp:50},
        {id: 3, value: "Ruby On Rails", xp:60},
        {id: 3, value: "Bootstrap", xp:40}
    ])
    return (
        <div className="frameworks">
            <ProgressBar
                data={frameworks}
                className="frameworksDisplay"
                title="frameworks & bibliothèques"
            />
        </div>
    );
};

export default Frameworks;