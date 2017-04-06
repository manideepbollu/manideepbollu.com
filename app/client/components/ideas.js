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
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. </p>
                                <a href="#one" className="button">More</a>
                            </div>
                            <div className="4u 12u$(medium) idea-block">
                                <i className="flaticon-business"></i>
                                <h3>Simply Awesome</h3>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. </p>
                                <a href="#one" className="button">More</a>
                            </div>
                            <div className="4u$ 12u$(medium) idea-block">
                                <i className="flaticon-transport"></i>
                                <h3>Shared Delivery Network (SDN)</h3>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. </p>
                                <a href="#one" className="button">More</a>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}