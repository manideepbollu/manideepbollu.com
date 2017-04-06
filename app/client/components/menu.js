import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuLinks: ["Main", "Resume", "work", "Blog"],
            menuButtons: ["Contact"] 
        }
    }

    render() {
        return (
            <nav id="menu" onClick={console.log("Clicked")} className={this.props.className}>
                <div className="inner">
                    <ul className="links">
                        {this.state.menuLinks.map((link) => (<li><a href="#">{link}</a></li>))}
                    </ul>
                    <ul className="actions vertical">
                        {this.state.menuButtons.map((button) => (<li><a href="#" className="button special fit">{button}</a></li>))}
                    </ul>
                </div>
                <a className="close" href="#">Close</a>
            </nav>
        )
    }
}