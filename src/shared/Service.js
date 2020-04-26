import React from 'react';
import '../assets/seed'
import './styles/Service.css'
import ServiceInfo from './ServiceInfo';


class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showDescription: false
        }
    }

    handleServiceInfo = service => {
        this.setState ({
            showDescription: !this.state.showDescription
        })
    };

    render() { 
        console.log(this.props.obj)
        const serviceModal = this.state.showDescription ? (
            
            <ServiceInfo
            data={this.props.obj}
            onClick={this.handleServiceInfo}

            />
        ) : null
    return(
        <React.Fragment>
        <button className={`services-btn`} onClick={()=>this.handleServiceInfo()}>{this.props.obj.buttonId}</button>
        {serviceModal}
        </React.Fragment>
        
    )
}
}
export default Service;
