import React, { Component } from 'react';
import { MDBFormInline, MDBIcon } from "mdbreact";

class FilterSection extends Component {
    
    render(){
        return (
            <div className="card p-3 w-100">
                <MDBFormInline className="md-form">
                    <MDBIcon icon="city" />
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="City" aria-label="Search" />
                </MDBFormInline>
                <MDBFormInline className="md-form">
                    <MDBIcon far icon="grin-tongue-squint" />
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Category"/>
                </MDBFormInline>
            </div>
        );
    }
}


export default FilterSection;