import React, { useState } from 'react';

const Project = (props) => {
    const [showInfo, setShowInfo] = useState(false)

    const handleInfo= () => 
    {
        setShowInfo(!showInfo)
    }

    let {name, source, site, info, picture} = props.item
    console.log(site)
    
    return (
        <div className="project"  onClick={handleInfo}>
            <h3>{name}</h3>
            <img src={picture} alt=""/>
            {
                showInfo && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>
                            </div>

                            <p className="text">{info}</p>
                            <div className="sourceContent">
                                <div className="sourceCode">
                                    <a href={source} rel="noopener noreferrer" className="button" target="_blank"> Code Source</a>
                                </div>
                                { site ?
                                <div>
                                    <a href={site} rel="noopener noreferrer" className="button" target="_blank"> Site web</a>
                                </div>
                                : ""}
                            </div>

                            <div className="button return" onClick={handleInfo}>
                                Retourner sur la page
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Project;