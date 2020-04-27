import React from 'react';
import './styles/Contact.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: "",
            phone: "",
            address: ""
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e=> {
        fetch("/", {
            method:"POST",
            headers: { "Content-Type":"application/x-www-form-urlencoded"},
            body: encode({ "form-name": "contact", ...this.state})
        })
            .catch(error=> console.log(error));
            window.location='/'
            alert("THank you for your message. We'll be in touch shortly.")
            e.preventDefault();
    }
    
    render() { 
        const { name, email, phone, address } = this.state;
        return ( 
            <div className='contact-form'>
                <p>Interested in our services? <br/><br/>
                Fill out the fields below and look out for an e-mail.</p>
            <form 
            name='contact'
            className='actual-form'
            onSubmit={this.handleSubmit}
            data-netlify="true" 
            data-netlify-honeypot="bot-field" >
                
            <label/>
            <input
            type='text'
                placeholder="Full Name"
                value={name}
                name="name"
                required
                onChange={this.handleChange}
            />
            

            <label/>
            <input
                placeholder="E-Mail"
                type='email'
                value={email}
                name="email"
                required
                onChange={this.handleChange}
            />
            

            <label/>
            <input
                placeholder="Phone"
                type='text'
                value={phone}
                name="phone"
                required
                onChange={this.handleChange}
            />
            

            <label/>
                <input
                placeholder=" Where is your business located?"
                type='text'
                value={address}
                name="address"
                required
                onChange={this.handleChange}
            />
            

            <button className='submit' type="submit">Submit</button>
            </form>
        
            </div>
        );
    }
}

export default Contact;