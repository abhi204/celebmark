import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import TagsSection from './tags_section';

class FilterSection extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { showModal: false}
    }

    toggle = () => {
        this.setState({
            showModal: !this.state.showModal
        });
      }

    render(){
        return (
            <div className="w-100 d-inline-block">                
                <MDBBtn color="info" onClick={this.toggle}>Apply filters</MDBBtn>
                <MDBModal isOpen={this.state.showModal} toggle={this.toggle} fullHeight >
                    <MDBModalHeader toggle={this.toggle}><strong>Search Filters</strong></MDBModalHeader>
                    <MDBModalBody className="p-3">
                        <MDBInput label="Location" outline icon="map-marker-alt" className="" />
                        <MDBInput label="Budget" outline icon="rupee-sign" className="" />
                        <TagsSection/>
                    </MDBModalBody>
                </MDBModal>
                {/* <MDBModal isOpen={this.state.showModal} toggle={this.toggle} fullHeight position="right" className="mt-5">
                    <MDBModalHeader toggle={this.toggle}><strong>Search Filters</strong></MDBModalHeader>
                    <MDBModalBody className="p-3">
                        <TagsSection/>
                    </MDBModalBody>
                </MDBModal> */}
            </div>
        );
    }
}


export default FilterSection;
