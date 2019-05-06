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
                            <MDBCol lg="3">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                                        alt=""
                                    />
                                        <MDBMask overlay="white-slight"/>
                                </MDBView>
                            </MDBCol>
                            <MDBCol className="pl-4">
                                <h3 className="font-weight-bold text-center  my-3">
                                    <MDBIcon icon="info-circle" className="pr-2"/>
                                    Profile Details &nbsp;
                                    <sup>
                                    <Link to="/dashboard/settings"><MDBIcon style={{fontSize: '0.8em'}} far icon="edit" /></Link>
                                    </sup>
                                </h3>
                                <h5 className="font-weight-bold pb-2">
                                    <MDBIcon icon="user-circle" size="md" className="pink-text"/>&nbsp;
                                    <strong> {user.first_name} {user.last_name}</strong>
                                </h5>
                                <h5 className="font-weight-bold pb-2">
                                    <MDBIcon icon="at" size="lg" className="pink-text"/>&nbsp;&nbsp;
                                    <strong>{user.email}</strong>
                                </h5>
                                <h5 className="font-weight-bold pb-2">&nbsp;
                                    <MDBIcon icon="mobile" size="lg" className="pink-text"/>&nbsp;&nbsp;&nbsp;
                                    <strong> +91 {user.mobile}</strong>
                                </h5>
                                <h5 className="font-weight-bold pb-2">&nbsp;
                                    <MDBIcon icon="credit-card" size="md" className="pink-text"/>
                                    &nbsp;&nbsp;Subscribed to<strong> {user.subscription} Plan</strong>
                                    &nbsp;<MDBIcon style={{fontSize: '0.7em'}} icon="question-circle" />
                                </h5>
                            </MDBCol>

                        </MDBRow>
                        <hr className="my-1"/>
                        <MDBRow>
                            <MDBCardBody cascade className="text-center">
                                <h2 className="font-weight-bold mb-3">
                                    <MDBIcon icon="layer-group" size="md" className="pink-text pr-2"/>
                                    <strong> Summary</strong>
                                </h2>
                                <Link to="/dashboard/invites">
                                    <MDBBtn rounded className="btn-fb waves-light">
                                        <MDBIcon icon="gift" className="pr-2"/>
                                        <strong>Invites Sent</strong>
                                    </MDBBtn>
                                    <span className="counter">46</span>
                                </Link>
                                <MDBBtn rounded className="btn-tw waves-light">
                                    <MDBIcon far icon="bell" className="pr-2"/>
                                    <strong> Invite Remaining</strong>
                                </MDBBtn>
                                <span className="counter">22</span>
                                <Link to="/dashboard/invites">
                                    <MDBBtn rounded className=" waves-light">
                                        <MDBIcon icon="comments" className="pr-2"/>
                                        <strong>Invite Accepeted</strong>
                                    </MDBBtn>
                                </Link>
                                <span className="counter">31</span>
                                <Link to="/dashboard/invites">
                                    <MDBBtn rounded className="btn-gplus waves-light">
                                        <MDBIcon icon="ban" className="pr-2"/>
                                        <strong>Invite Cancelled</strong>
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

