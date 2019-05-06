import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {MDBRow, MDBCol, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer} from "mdbreact";
import "./profile.css";

class DetailsSection extends Component {

    render() {
        const { user } = this.props;
        return (
            <MDBContainer className="mt-4">
                <div className="mt-1 px-5 py-3 big-screen-margin-profile">
                    <MDBCardBody>
                        <MDBRow className="pt-3 mb-3 ">
                            <MDBCol lg="3" >
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src={user.profile_pic}
                                        alt=""
                                    />
                                        <MDBMask overlay="white-slight"/>
                                </MDBView>
                            </MDBCol>
                            <MDBCol className="pl-4 mobile-content-profile" lg="5" >
                                <h3 className="font-weight-bold mb-3 blue-grey-text">
                                    <MDBIcon icon="info-circle" className="pr-2"/>
                                    Profile Details &nbsp;
                                    <Link to="/dashboard/settings" >
                                        <sup className="font-medium purple-text">
                                            <MDBIcon far icon="edit" />
                                        </sup>
                                    </Link>
                                </h3>
                                <h4 className="h4-responsive font-weight-bold mb-2 p-0">
                                    <MDBIcon icon="user-circle" size="md" className="pink-text"/>&nbsp;
                                    <span className="text-capitalize"> {user.first_name} {user.last_name} </span>
                                </h4>
                                <h6 className="font-weight-bold mb-2 p-0">
                                    <MDBIcon icon="at" size="lg" className="pink-text"/>&nbsp;&nbsp;
                                    <strong>{ user.email }</strong>
                                </h6>
                                <h6 className="font-weight-bold mb-2 p-0">&nbsp;
                                    <MDBIcon icon="mobile" size="lg" className="pink-text"/>&nbsp;&nbsp;&nbsp;
                                    <strong> +91 {user.mobile}</strong>
                                </h6>
                                <h5 className="font-weight-bold pb-2">&nbsp;
                                    <MDBIcon icon="credit-card" size="md" className="pink-text"/>
                                    &nbsp;&nbsp;Subscribed to<span className="text-capitalize"> {user.subscription}</span> plan
                                    &nbsp;<MDBIcon style={{fontSize: '0.7em'}} icon="question-circle" />
                                </h5>
                            </MDBCol>

                        </MDBRow>
                        <hr className="my-1"/>
                        <MDBRow>
                            <MDBCardBody cascade className="text-center">
                                <h2 className="font-weight-bold mb-3">
                                    <MDBIcon icon="layer-group" size="md" className="pink-text pr-2"/>
                                    <strong> Invites</strong>
                                </h2>
                                <Link to="/dashboard/invites">
                                    <MDBBtn rounded className="btn-fb waves-light">
                                        <MDBIcon icon="gift" className="pr-2"/>
                                        <strong>Sent</strong>
                                    </MDBBtn>
                                    <span className="counter">46</span>
                                </Link>
                                <MDBBtn rounded className="btn-tw waves-light">
                                    <MDBIcon far icon="bell" className="pr-2"/>
                                    <strong>Pending</strong>
                                </MDBBtn>
                                <span className="counter">22</span>
                                <Link to="/dashboard/invites">
                                    <MDBBtn rounded className=" waves-light">
                                        <MDBIcon icon="comments" className="pr-2"/>
                                        <strong>Accepted</strong>
                                    </MDBBtn>
                                </Link>
                                <span className="counter">31</span>
                                <Link to="/dashboard/invites">
                                    <MDBBtn rounded className="btn-gplus waves-light">
                                        <MDBIcon icon="ban" className="pr-2"/>
                                        <strong>Cancelled</strong>
                                    </MDBBtn>
                                    <span className="counter">18</span>
                                </Link>
                            </MDBCardBody>
                        </MDBRow>
                    </MDBCardBody>
                </div>
            </MDBContainer>
        );
    }
}

let mapStateTopProps = (state) => ({
    user: state.user.details
})

export default withRouter(connect(mapStateTopProps)(DetailsSection));

