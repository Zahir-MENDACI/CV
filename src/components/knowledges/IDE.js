import React, { useState } from 'react';
import ProgressBar from './ProgressBar'

const IDE = () => {
    const [ide, setIde] = useState([
        {id: 1, value: "Android Studio", xp:60},
        {id: 2, value: "Visual Studio Code", xp:80},
        {id: 3, value: "Eclipse", xp:50}
    ])
    return (
        <div className="ide">
            <ProgressBar
                data={ide}
                className="ideDisplay"
                title="IDE"
            />
        </div>
    );
};

export default IDE;