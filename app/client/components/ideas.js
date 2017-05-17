import React from 'react';

export default class Ideas extends React.Component {
    gotoGithub(dude) {
        console.log(dude);
    }
    render() {
        return (
            <section id="ideas">
                    <div className="inner">
                        <header>
                            <h1>My recent work</h1>
                        </header>
                        <div className="row">
                            <div className="3u 12u$(medium) idea-block">
                                <i className="flaticon-multimedia"></i>
                                <h3>Backstage</h3>
                                <p>Backstage is a browser extension (Chrome and Firefox for now) which tracks users browsing activity by applying machine learning techniques and provides various analytics. </p>
                                <a className="button" href="https://github.com/manideepbollu/backstage" target="_blank" >Github</a>
                            </div>
                            <div className="3u 12u$(medium) idea-block">
                                <i className="flaticon-transport"></i>
                                <h3>Cosail</h3>
                                <p>Cosail is an open source boat sharing platform, inspired from Company Carpool. It enables boat sharing and encourages more people to travel in one boat which reduces the costs. </p>
                                <a className="button" href="https://github.com/manideepbollu/cosail" target="_blank" >Github</a>
                            </div>
                            <div className="3u 12u$(medium) idea-block">
                                <i className="flaticon-school"></i>
                                <h3>Scintin</h3>
                                <p>SCINTIN is an ERP + School Network project. It can be used as an enterprise resource planner which can address all the issues involved in administering a school/college. </p>
                                <a className="button" href="https://github.com/manideepbollu/scintin" target="_blank" >Github</a>
                            </div>
                            <div className="3u 12u$(medium) idea-block">
                                <i className="flaticon-business"></i>
                                <h3>Simply Awesome</h3>
                                <p>Simply Awesome is a real time competition assessment tool which is meant to provide real time information on various factors affecting a restaurant business. </p>
                                <a className="button" href="https://github.com/manideepbollu/simplyawesome" target="_blank" >Github</a>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}