import React, { Component } from 'react';
import { MDBInput } from "mdbreact";

class FilterSection extends Component {

    render(){
        return (
            <div className="w-100 d-inline-block">
              {/* <h3><strong> <center> Filter Your Search </center></strong></h3> */}
                <MDBInput label="Location" outline icon="map-marker-alt" className="w-10 mt-1 active" />
                <MDBInput label="Budget" outline icon="rupee-sign" className="w-10 mt-1" />
            </div>
        );
    }
}


export default FilterSection;
