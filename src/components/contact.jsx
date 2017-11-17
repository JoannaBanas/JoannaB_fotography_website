import React from 'react';


class Contact extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: "",
            textarea: "",
            subject:''
        }
    }

    handleChange = e => {
        this.setState({
            name: e.target.value,
        });
    };

    handleChange2 = e => {
        this.setState({
            email: e.target.value,
        });
    };

    handleChange3 = e => {
        this.setState({
            textarea: e.target.value
        });
    };

    handleChange4 = e => {
        this.setState({
            subject: e.target.value
        });
    };


    handleClick = e => {
        e.preventDefault()
    };

    render(){
        return(
            <section className="contactUs" style ={{ backgroundImage: "url('../../images/krokus.jpg')" }}>

                <div className="container">
                    <div className="letsTalk">
                        <h2>Let's talk!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum error fugit hic incidunt iste maiores modi natus numquam obcaecati provident quae quas qui quo tempora vitae voluptatem, voluptatibus.</p>
                    </div>
                    <form className="form col-7" type="submit">
                        <div>
                            <label> Imię </label>
                            <input onChange={this.handleChange} type="text"/>
                        </div>
                        <div>
                            <label> Email </label>
                             <input onChange={this.handleChange2} type="email"/>
                        </div>
                        <div>
                            <label> Temat </label>
                            <input type="text" onChange={this.handleChange3}/>
                        </div>
                        <div>
                            <label> Wiadomość </label>
                            <textarea onChange={this.handleChange4} > </textarea>
                        </div>
                        <button type="submit" onClick={this.handleClick}> Wyślij </button>
                    </form>
                </div>
            </section>
        )
    }
}

module.exports = Contact;