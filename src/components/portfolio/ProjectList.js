import React, {useState} from 'react';
import {portfolioData} from '../../data/portfolioData'
import Project from './Project';

const ProjectList = () => {
    const [projects, setProjects] = useState(portfolioData)
    const [radios, setRadios] = useState([
        {id: 1, value: "All"},
        {id: 2, value: "Javascript"},
        {id: 3, value: "Css"},
        {id: 4, value: "React"},
        {id: 5, value: "Php"}
    ])
    const [selectedRadio, setSelectedRadio] = useState("All")

    console.log(projects)

    const handleRadio = (e) => 
    {
        let radio = e.target.value
        setSelectedRadio(radio)
    }

    return (
        <div className="portfolioContent">
            <ul className="radioDisplay">
                {
                    radios.map((radio) => 
                    {
                        return (
                            <li key={radio.id}>
                                <input 
                                type="radio" 
                                name="radio" 
                                id={radio.value}
                                checked={radio.value === selectedRadio}
                                value={radio.value}
                                onChange={handleRadio}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="projects">
                {
                    selectedRadio == "All" ? projects.map(item =>
                        {
                            return (
                                <Project 
                                    key={item.id}
                                    item={item}
                                />
                            )
                        }) :
                    projects
                    .filter(item => item.languages?.includes(selectedRadio))
                    .map(item =>
                        {
                            return (
                                <Project 
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                }
            </div>
        </div>
    );
};

export default ProjectList;