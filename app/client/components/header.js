import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Header extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                    transitionName="alt"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>
                <header id="header" className="alt">
                    <a href="index.html" className="logo"><strong>Manideep</strong> <span>Bollu</span></a>
                    
                    <nav>
                        <a href="/ManideepBollu_Resume.pdf" className="resume-download">Resume</a>
                    </nav>
                </header>
            </ReactCSSTransitionGroup>
        );
    }
}