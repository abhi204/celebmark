import React, { Component } from 'react';
import { MDBFormInline, MDBIcon, MDBInput } from "mdbreact";

class TagsSection extends Component {

    render(){
        return (
            <div className="card p-4 w-100 d-inline-block">
              <h3><strong> <center> Search By Tags </center></strong></h3>
                <MDBInput label="Enter Your Tag" icon="tags" outline className="w-10" />
                <br/><br/>
            </div>
        );
    }
}


export default TagsSection;
