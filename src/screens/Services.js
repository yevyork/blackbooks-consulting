import React from "react";
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
    showService(i) {
        this.setState({
            descriptionVisible: !this.state.descriptionVisible
        })
    }
  render() {
    let showClass= this.state.descriptionVisible ? "service-description" : "no-display"
    const all_services = this.state.allServices
    console.log(all_services)
    const services = all_services.map((service, i) => {
    return (
        <div className="services-main-container">
                
            <div className="service">
                <button className="services-btn" onClick={(i)=>this.showService(i)}>{service.buttonId}</button>
                <p className={showClass}>{service.content}</p>
            </div>
        </div>
    )})
    
    return(
        <>
        <h3>Services</h3>
        {services}
        </>
    )}}
export default Services;
