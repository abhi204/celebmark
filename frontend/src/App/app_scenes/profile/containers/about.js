import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { largeProfileUrl } from '_consts/dummy';
import { connect } from 'react-redux';

class AboutTab extends Component {
    render(){
        const { profile } = this.props;
        return (
            <div>
                <MDBContainer className="p-0 overflow-auto overflow-hidden position-relative" style={{ minHeight: "65vh" }}>
                    <div className="text-uppercase position-absolute pl-0" style={{
                        zIndex: 9,
                        letterSpacing: "0.1em",
                        lineHeight: "1em",
                        fontWeight: "bold",
                        fontSize: "5rem",
                        marginTop:"none",
                        top:"10rem",
                    }}>
                        <span style={{
                            backgroundColor: "white",
                            lineHeight: "1em",
                            letterSpacing: "0",
                            fontSize: "2rem",
                            fontWeight: "normal"
                        }}>{profile.category} {'//'} </span>
                        <br/>
                        <span style={{backgroundColor: "white"}}>{profile.first_name}</span>
                        <br/>
                        <span style={{backgroundColor: "white"}}>{profile.last_name}</span>
                    </div>
                    <img alt={profile.full_name} className="float-right" src={`${largeProfileUrl}`} style={{maxHeight: "34rem",zIndex: -9,}} />
                </MDBContainer>
                <MDBRow>
                    <MDBCol size="5"> </MDBCol>
                    <MDBCol size="7">
                        <MDBContainer className="p-0 pt-5 pb-3 " >
                            <p >
                                { profile.description }
                            </p>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
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