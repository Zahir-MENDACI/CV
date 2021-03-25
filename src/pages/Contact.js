import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <img src='image/Position.svg' className="icone"/>
                            <span>Paris</span>
                        </li>
                        <li>
                            <img src='image/Phone.svg' className="icone"/>
                            <CopyToClipboard text="0123456789">
                                <span 
                                className="clickInput"
                                onClick={() => {alert('copié')}}
                                >+33 6 98 59 31 92</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <img src='image/Email.svg' className="icone"/>
                            <CopyToClipboard text="menzahir@gmail.com">
                                <span 
                                className="clickInput"
                                onClick={() => {alert('copié')}}
                                >menzahir@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <img src='image/Linkedin-black.svg' className="icone"/>
                            <a href="https://www.linkedin.com/in/zahir-mendaci/">
                                <span 
                                className="clickInput"
                                >https://www.linkedin.com/in/zahir-mendaci/</span>
                            </a>
                        </li>
                        <li>
                            <img src='image/GitHub.svg' className="icone"/>
                            <a href="https://github.com/Zahir-MENDACI/">
                                <span>https://github.com/Zahir-MENDACI/</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;