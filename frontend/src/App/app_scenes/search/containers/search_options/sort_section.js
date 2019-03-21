import React, { Component } from 'react';
import { MDBFormInline, MDBSelect, MDBIcon, MDBInput } from "mdbreact";

class SortSection extends Component {
  state = {
    options: [
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option 1",
        value: "1"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option 2",
        value: "2"
      },
      {
        checked: false,
        disabled: false,
        icon: null,
        text: "Option 3",
        value: "3"
      }
    ]
  };

    render(){
        return (
            <div className="w-100 d-inline-block">
              <div>
                <MDBSelect
                  options={this.state.options}
                  selected="Select City"
                />
                <label>Location</label>
              </div>
              {/* <h5><strong>Sort By</strong></h5>
                <select filled className="browser-default custom-select">
                  <option>Stars</option>
                  <option value="1">Highest First</option>
                  <option value="2">Lowest First</option>
                </select>
                <select filled className="browser-default custom-select mt-2">
                  <option>Availibilty</option>
                  <option value="1">High Availlibilty.</option>
                  <option value="2">Moderate Availibilty.</option>
                </select> */}
            </div>
        );
    }
}


export default SortSection;
