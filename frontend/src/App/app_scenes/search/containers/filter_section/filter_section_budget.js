import React, { Component } from 'react';
import { MDBInput } from "mdbreact";

class FilterSectionBudget extends Component {

    render(){
        return (
            <div className="w-100 d-inline-block">
              {/* <h3><strong> <center> Filter Your Search </center></strong></h3> */}
              <MDBInput label="Budget" outline icon="rupee-sign" className="w-10 mt-1" />
            </div>
        );
    }
}


export default FilterSectionBudget;
