import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import { connect } from 'react-redux';

class GalleryTab extends Component {
    render(){
        const { profile } = this.props;
        return (
            <div>
                <MDBContainer className="p-0" style={{ backgroundColor: "red" }}>
                <div className="text-uppercase pl-0" style={{ letterSpacing:"0.1em", lineHeight:"1em", fontWeight:"bold", fontSize:"5rem", position: "absolute", bottom: "50%"}}>
                    <span style={{ backgroundColor: "white"}}>GALLERY</span>
                </div>
                </MDBContainer>
            </div>
        );
    }
}

let mapStateToProps = (state) => (
    {
        profile: state.profile
    }
)

export default connect(mapStateToProps)(GalleryTab);