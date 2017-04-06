import React from 'react';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuLinks: ["Main", "Resume", "work", "Blog"],
            menuButtons: ["Contact"] 
        }
    }

    render() {
        return (
            <div id="popup">
                <div className="inner">
                    <h1>Thank you!</h1>
                    <a className="button" href="#" onClick={this.props.clickCallback}>Go Back!</a>
                </div>
            </div>
        )
    }
}