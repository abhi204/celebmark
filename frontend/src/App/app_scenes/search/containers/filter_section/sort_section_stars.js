import React, { Component } from 'react';
import { MDBFormInline, MDBIcon, MDBInput } from "mdbreact";

class SortSectionStars extends Component {

    render(){
        return (
            <div className="w-100 d-inline-block">
                <br/>
                <select filled className="browser-default custom-select">
                  <option>Stars</option>
                  <option value="1">Highest First</option>
                  <option value="2">Lowest First</option>
                </select>

            </div>
        );
    }
}


export default SortSectionStars;
