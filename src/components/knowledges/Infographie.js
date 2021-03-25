import React, { useState } from 'react';
import ProgressBar from './ProgressBar'

const Infographie = () => {
    const [infographie, setInfographie] = useState([
        {id: 2, value: "Illustrator", xp:50},
        {id: 1, value: "PhotoShop", xp:30},
        {id: 3, value: "After Effects", xp:30}
    ])
    return (
        <div className="infographie">
            <ProgressBar
                data={infographie}
                className="infographieDisplay"
                title="Infographie"
            />
        </div>
    );
};

export default Infographie;