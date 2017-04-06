import React from 'react';

export default class Ideas extends React.Component {
    render() {
        return (
            <section id="ideas">
                    <div className="inner">
                        <header>
                            <h1>Currently working on</h1>
                        </header>
                        <div className="row">
                            <div className="4u 12u$(medium) idea-block">
                                <i className="flaticon-multimedia"></i>
                                <h3>Backstage</h3>
                                <p>Backstage is a browser extension (Chrome and Firefox for now) which tracks users browsing activity by applying machine learning techniques and provides suggested content. </p>
                            </div>
                            <div className="4u 12u$(medium) idea-block">
                                <i className="flaticon-business"></i>
                                <h3>Simply Awesome</h3>
                                <p>Simply Awesome is a real time competition assessment tool which is meant to provide real time information on various factors affecting a restaurant business. </p>
                            </div>
                            <div className="4u$ 12u$(medium) idea-block">
                                <i className="flaticon-transport"></i>
                                <h3>Shared Delivery Network (SDN)</h3>
                                <p>SDN is a shared delivery network, it's an app which connects individual car/bike drivers who are willing to deliver stuff with those business/individuals who require delivery. </p>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}