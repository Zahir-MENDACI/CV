import React from 'react';
import Bdd from '../components/knowledges/Bdd';
import Bureautique from '../components/knowledges/Bureautique';
import Experience from '../components/knowledges/Experience';
import Frameworks from '../components/knowledges/Frameworks';
import Hobbies from '../components/knowledges/Hobbies';
import IDE from '../components/knowledges/IDE';
import Infographie from '../components/knowledges/Infographie';
import Languages from '../components/knowledges/Languages';
import Langues from '../components/knowledges/Langues';
import OtherSkills from '../components/knowledges/OtherSkills';
import SE from '../components/knowledges/SE';
import Navigation from '../components/Navigation';

const Competences = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Languages/>
                <IDE/>
                <Bdd/>
                <Frameworks/>
                <Infographie/>
                <Langues/>
                <SE/>
                <Bureautique/>
                {/* <Experience/> */}
                {/* <OtherSkills/> */}
                <Hobbies/>
            </div>
        </div>
    );
};

export default Competences;