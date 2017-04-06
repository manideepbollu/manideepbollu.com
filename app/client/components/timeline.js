import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Timeline extends React.Component {
    render() {
        return (
            <section id="timeline">
                <div className="timeline-block">
                    <div className="timeline-img">
                    </div>
            
                    <div className="timeline-content">
                        <div className="date"><strong>Aug, 2016</strong></div>
                        <div id="anim-node" className="anim-target"></div>
                    </div>
                </div>

                <div className="timeline-block">
                    <div className="timeline-img">
                    </div>

                    <div className="timeline-content">
                        <div className="date"><strong>May, 2016</strong></div>
                        <div id="anim-hadoop" className="anim-target"></div>
                    </div>
                </div>

                <div className="timeline-block">
                    <div className="timeline-img">
                    </div>

                    <div className="timeline-content">
                        <div className="date"><strong>Jan, 2016</strong></div>
                        <div id="anim-lamar" className="anim-target"></div>
                    </div>
                </div>

                <div className="timeline-block">
                    <div className="timeline-img">
                    </div>

                    <div className="timeline-content">
                        <div className="date"><strong>Aug, 2013</strong></div>
                        <div id="anim-cgi" className="anim-target"></div>
                    </div>
                </div>

                <div className="timeline-block">
                    <div className="timeline-img">
                    </div>

                    <div className="timeline-content">
                        <div className="date"><strong>Sometime in 2012</strong></div>
                        <div id="anim-ruby" className="anim-target"></div>
                    </div>
                </div>
            </section>
        );
    }
}