import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {
    MDBCardHeader,
    MDBContainer,
    MDBIcon, MDBMedia,
} from "mdbreact";
import "./invite.css";

class InvitesSection extends Component {

    render() {
        return (
            <div>
                <h4 className="h4-responsive text-center mt-5 black-text" color=" teal darken-1">
                    <MDBIcon icon="gift" size="md" className="pink-text mr-2"/>
                    <strong>Invites</strong>
                </h4>
                <div className="my-3 z-depth-1 border border-light rounded px-4 py-4 big-screen-margin-invite">
                    <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
                        <p className="mr-4 mb-0">1. Status :- Pending</p>
                        <ul className="list-unstyled text-default list-inline mb-0">
                            <li className="list-inline-item mr-3"><Link className="green-text" to=""><MDBIcon
                                className="mr-2" icon="user"/>Profile</Link></li>
                            <li className="list-inline-item mr-3"><Link className="red-text" to=""><MDBIcon
                                className="mr-2" icon="trash-alt"/>Cancel</Link></li>
                        </ul>
                    </MDBCardHeader>
                    <MDBMedia className="p-4 bg-white">
                        <MDBMedia>
                            <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src="#" alt=""/>
                        </MDBMedia>
                        <MDBMedia body>
                            <h4 className="font-weight-bold mt-0">
                                Deep Narayan Tandan
                            </h4>
                            <span className="pt-0"><h4><small>Invited On: </small> 01/05/2019</h4></span>
                            <ul className="list-unstyled list-inline mb-2 pt-2  more-padding">
                                <li className="list-inline-item m-1">
                                    <MDBIcon className="cyan-text" size="md" icon="poll"/><span
                                    className="font-weight-bold">&nbsp;Event Type:</span>
                                </li>
                                &nbsp; &nbsp;
                                <li className="list-inline-item m-1">
                                    <MDBIcon className="cyan-text" size="md" icon="headset"/><span
                                    className="font-weight-bold">&nbsp;Celebrity Role:</span>
                                </li>
                                &nbsp; &nbsp;
                                <li className="list-inline-item m-1">
                                    <MDBIcon className="cyan-text" size="md" icon="map-marker-alt"/><span
                                    className="font-weight-bold">&nbsp;Event City:</span>
                                </li>
                                &nbsp; &nbsp;
                                <li className="list-inline-item m-1">
                                    <MDBIcon className="cyan-text" size="md" icon="city"/><span
                                    className="font-weight-bold">&nbsp;Event Venue:</span>
                                </li>
                                &nbsp; &nbsp;
                                <li className="list-inline-item m-1">
                                    <MDBIcon className="cyan-text" size="md" icon="calendar-check"/><span
                                    className="font-weight-bold">&nbsp;Event Date:</span>
                                </li>
                            </ul>
                        </MDBMedia>
                    </MDBMedia>
                </div>
            </div>
        );
    }
}

export default withRouter(InvitesSection);