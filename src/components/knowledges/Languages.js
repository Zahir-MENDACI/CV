import React, {useState} from 'react';
import ProgressBar from './ProgressBar'

const Languages = () => {

    const [languages, setLanguages] = useState([
        {id: 1, value: "Javascript", xp:80},
        {id: 2, value: "Java", xp:40},
        {id: 3, value: "Php", xp:60},
        {id: 4, value: "Ruby", xp:20},
        {id: 5, value: "SQL", xp:70},
        {id: 6, value: "Html", xp:90},
        {id: 7, value: "Css", xp:70}
    ])

    return (
        <div className="languages">
            <ProgressBar
                data={languages}
                className="languagesDisplay"
                title="languages"
            />
        </div>
    );
};

export default Languages;