import React, { Component } from 'react';
import { MDBFormInline, MDBIcon, MDBInput } from "mdbreact";

class FilterSection extends Component {

    render(){
        return (
            <div className="card p-4 mb-3 w-100  d-inline-block">
              <h3><strong> <center> Filter Your Search </center></strong></h3>
                <MDBInput label="Location" outline icon="map-marker-alt" className="w-10 mt-1" />
                <MDBInput label="Budget" outline icon="rupee-sign" className="w-10 mt-1" />
            </div>
        );
    }
}


export default FilterSection;
