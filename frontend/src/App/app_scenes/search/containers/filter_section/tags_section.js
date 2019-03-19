import React, { Component } from 'react';
import { MDBFormInline, MDBIcon, MDBInput } from "mdbreact";

class TagsSection extends Component {

    render(){
        return (
            <div className="w-100 d-inline-block">
              <h5><strong>Tags</strong></h5>
                <MDBInput label="Tag" icon="tags" outline className="w-10" />
                <br/><br/>
            </div>
        );
    }
}


export default TagsSection;
