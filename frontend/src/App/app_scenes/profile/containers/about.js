import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import { largeProfileUrl } from '_consts/dummy';
import { connect } from 'react-redux';

class AboutTab extends Component {
    render(){
        const { profile } = this.props;
        return (
            <div>
                <MDBContainer className="p-0 overflow-auto position-relative" style={{ minHeight: "95vh" }}>
                <div className="text-uppercase position-absolute pl-0" style={{ letterSpacing:"0.1em", lineHeight:"1em", fontWeight:"bold", fontSize:"5rem", bottom: "5%"}}>
                    <span style={{ backgroundColor: "white", lineHeight:"1em", letterSpacing:"0", fontSize:"2rem", fontWeight:"normal"}} >{profile.category} {'//'} </span>
                    <br/>
                    <span style={{ backgroundColor: "white"}}>{profile.first_name}</span>
                    <br/>
                    <span style={{ backgroundColor: "white"}}>{profile.last_name}</span>
                </div>
                    <img alt={profile.full_name} className="float-right" src={`${largeProfileUrl}`} style={{maxHeight: "30rem"}} />
                </MDBContainer>
                <MDBContainer className="p-0">
                    <p>
                        { profile.description }
                    </p>
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

export default connect(mapStateToProps)(AboutTab);