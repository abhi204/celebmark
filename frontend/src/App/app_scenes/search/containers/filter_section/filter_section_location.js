import React, { Component } from 'react';
import { MDBInput } from "mdbreact";

class FilterSectionLocation extends Component {

    render(){
        return (
            <div className="w-100 d-inline-block">
              {/* <h3><strong> <center> Filter Your Search </center></strong></h3> */}
                <MDBInput label="Location" outline icon="map-marker-alt" className="w-10 mt-1 active" />

            </div>
        );
    }
}


export default FilterSectionLocation;
