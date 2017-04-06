"use strict";

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './header';
import Banner from './banner';
import Timeline from './timeline';
import Ideas from './ideas';
import Contact from './contact';
import Popup from './popup';


export default class Layout extends React.Component {
    constructor() {
        super();
        this.togglePopup = this.togglePopup.bind(this);
    }

    componentWillMount() {
        this.setState({ 
            showPopup: false,
            menuComponent: ""
         });
    }

    togglePopup() {
        this.setState({ 
            showPopup: !this.state.showPopup,
         });

         if(!this.state.showPopup)
            this.setState({ 
                menuComponent: <Popup clickCallback={this.togglePopup} />
            });
        else
            this.setState({ 
                menuComponent: ""
            });  
    }

    render() {
        return (
            <div id="layout">
                <div id="wrapper" className={this.state.showPopup ? "blur" : ""}>
                    <Header />
                    <Banner />
                    <Timeline />
                    <Ideas />
                    <Contact clickCallback={this.togglePopup} />
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="show"
                    transitionAppear={false}
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={1000}>
                    {this.state.menuComponent}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}


