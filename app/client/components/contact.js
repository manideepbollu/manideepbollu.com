import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            name: "",
            email: "",
            message: ""
        };

    }

    resetForm() {
        this.setState({
            name: "",
            email: "",
            message: ""
        });
    }

    handleChange(event) {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    submitForm() {
        this.props.clickCallback();
    }

    render() {
        return (
            <section id="contact">
                <header>
                    <h1>Get in touch</h1>
                </header>
                <div className="inner">
                    <section>
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="6" value={this.state.message} onChange={this.handleChange}></textarea>
                        </div>
                        <ul className="actions">
                            <li><a className="button special" onClick={this.submitForm}>Send Message</a></li>
                            <li><a className="button" onClick={this.resetForm} >Clear</a></li>
                        </ul>
                    </section>
                    <section>
                        <strong>You can message me about work, latest trends, projects, ideas or just say "Hi" for a friendly chat; we may sit over a delicious brew.<br /><br />
                        Thank you for checking me out.</strong>
                        <div className="self">
                            <img className="profile-pic" src="./images/mbprofile.jpg" />
                            <img className="signature" src="./images/signature.png" />
                        </div>
                        <div className="row 50% uniform">
                            <div className="3u"><a href="mailto:manideep@msn.com" className="image fit"><i className="flaticon-interface"></i></a></div>
                            <div className="3u"><a href="https://www.facebook.com/manideepbollu" target="_blank" className="image fit"><i className="flaticon-facebook-logo"></i></a></div>
                            <div className="3u"><a href="https://www.linkedin.com/in/manideepbollu/" target="_blank" className="image fit"><i className="flaticon-linkedin-sign"></i></a></div>
                            <div className="3u$"><a href="https://bitbucket.org/manideepbollu/" target="_blank" className="image fit"><i className="flaticon-bitbucket-sign"></i></a></div>
                        </div>
                        <footer>
                            <p>© 2017 - <a href="http://www.manideepbollu.com/">Manideep Bollu</a>. Content is reserved. But the design is free to adapt. Icons designed by <a href="http://www.flaticon.com/authors/google">Google</a>, <a href="http://www.flaticon.com/authors/freepik">Freepik</a> and <a href="http://www.flaticon.com/authors/dave-gandy">Dave Gandy</a> from <a href="http://www.flaticon.com/">flaticon</a>.</p>
                        </footer>
                    </section>
                </div>
                <div className="bg-blender"></div>
            </section>
        );
    }
}