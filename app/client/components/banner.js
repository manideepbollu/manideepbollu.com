import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            header: <h1>Hi, I'm Manideep Bollu</h1>,
            content: <p>
                        Well, I am into App development, Machine Learning, Big data and other stuff.<br/><br/>
                        Tags: Former Software Engineer / Computer Science Graduate Student / Techie / Coffee n Code addict / Rails fan / node lover / Machine Learning and Big Data enthusiast
                    </p>
        }; 
    }

    render() {
        return (
            <section id="banner" className="major">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="show"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="inner">
                        <header className="major">
                            {this.state.header}
                        </header>
                        <div className="content">
                            {this.state.content}
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </section>
        );
    }
}