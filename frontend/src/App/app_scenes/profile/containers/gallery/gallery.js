import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import { connect } from 'react-redux';
import GalleryPagination from './gallery_pagination';

class GalleryTab extends Component {
    render(){
        return (
            <div>
                <MDBContainer className="p-0 overflow-auto position-relative" >
                <div className="text-uppercase position-absolute pl-0" style={{ letterSpacing:"0.1em", lineHeight:"1em", zIndex:9, fontWeight:"bold", fontSize:"5rem", top: "8rem"}}>
                    <span style={{ backgroundColor: "white"}}>GALLERY</span>
                </div>
                <div className="float-right" style={{width: "90%"}}>
                    <GalleryPagination/>
                </div>
                </MDBContainer>
            </div>
        );
    }
}

let mapStateToProps = (state) => (
    {
        profile: state.profile,
    }
)

export default connect(mapStateToProps)(GalleryTab);