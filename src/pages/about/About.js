import React from 'react';
import './About.css'

function About() {
    return (
        <div className="about">
            <h1>About</h1>
                    <h1>Website Description</h1>
            <div className="about-container">
                <div className="about-info">
                    <div className="about-p">
                        <p>APIs used in this project: <b>CoinGecko API</b>, <b>Smartbit API</b>, <b>Newscatcher API</b>, <b>SmartableAI API</b>.</p>
                        <p>With the help of the following libraries: <b>Chart.js</b>, <b>Moment</b>, <b>JS-Cookie</b>, <b>Material UI</b>, <b>JWT</b>, <b>React Router</b>, <b>Axios</b>, <b>Styled Components</b>.</p>
                        <p>For Backend was used: <b>Firebase.</b></p>
                    </div>
                </div>
                <div className="about-technologies">
                    <div className="about-technologies-col">
                        <img className="about-image" src="https://wsd.events/2018/12/01/pres/code-editors/pictures/logos/html-css-js.png" alt="html-css-javascript"/>
                        <img className="about-image" src="https://www.icoldo.com/wordpress/wp-content/uploads/2018/02/js_node_js_react_logos-300x225.png" alt="nodejs-react" style={{width: '400px', height: '300px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
