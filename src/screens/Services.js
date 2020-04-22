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
    
    const services = all_services.map((service, i) => {
        // console.log(service, i)
    return (
            <div className={`service${i}`} key={i}> 
                <button className="services-btn" onClick={()=>this.showService()}>{service.buttonId}</button>
                <p className={showClass}>{service.content}</p>
            </div>
    )})
    
    return(
        <div className="services-main-container">
        <h3>Services</h3>
        {services}
        </div>
    )}}
export default Services;
