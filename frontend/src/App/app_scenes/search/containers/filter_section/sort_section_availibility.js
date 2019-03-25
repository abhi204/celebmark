import React, { Component } from 'react';
import { MDBFormInline, MDBIcon, MDBInput } from "mdbreact";

class SortSectionAvialibility extends Component {

    render(){
        return (
            <div className="w-100 d-inline-block">
                <br/>
                <select filled className="browser-default custom-select">
                  <option>Availibilty</option>
                  <option value="1">High Availlibilty.</option>
                  <option value="2">Moderate Availibilty.</option>
                </select>

            </div>
        );
    }
}


export default SortSectionAvialibility;
