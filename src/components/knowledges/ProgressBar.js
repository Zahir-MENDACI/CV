import React from 'react';

const ProgressBar = (props) => {
    console.log(props)
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>

            <div>
                {
                    props.data.map((item) => 
                    {
                        let xpYears = 2
                        let progressBar = item.xp + "%"
                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBarContainer">
                                    <div className="progressBar" style={{width:progressBar}}>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;