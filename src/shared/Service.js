import React from 'react';
import '../assets/seed'
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
        const serviceModal = this.state.showDescription ? (
            
            <ServiceInfo
            data={this.props.obj}
            handleServiceInfo={this.handleServiceInfo}

            />
        ) : null
    return(
        <React.Fragment>
        <button className="services-btn" onClick={()=>this.handleServiceInfo()}>{this.state.showDescription ? "Close" : this.props.obj.buttonId}</button>
        {serviceModal}
        </React.Fragment>
        
    )
}
}
export default Service;
