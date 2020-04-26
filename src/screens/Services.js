import React from "react";
import Service from '../shared/Service'
import "./styles/Services.css";
import services from '../assets/seed'

class Services extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        descriptionVisible: false,
        allServices:[]
    };
}

    componentDidMount() {
        try {
            const response = services;
            this.setState({ allServices: response });
        } catch (err) {
            console.error(err);
        }
    }
    
    showService = service => {
        this.setState({
            descriptionVisible: !this.state.descriptionVisible
        })
    }
    
    render() {
        const renderServices = this.state.allServices.map((service, i) => {
        return (
            <Service key={i} obj={service}/>
        )})
    
        return(
            <div className="services-main-container">
            <h3>Services</h3>
            {renderServices}
            </div>
        )};
    }
export default Services;
