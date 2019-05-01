import React from 'react';
import {MDBCardHeader, MDBContainer, MDBIcon, MDBMedia} from "mdbreact";
import { largeProfileUrl } from '_consts/dummy';


const InviteSent = ({invite}) => {
    return (
        <MDBContainer className="mt-5 border border-dark rounded">
            <h3 className="text-center green-text font-weight-bold mt-4 ">Invitation Sent Successfully</h3><br/>
            <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
              <p className="mr-4 mb-0">Your invitation for following celebrity was successfull.</p>
              <ul className="list-unstyled text-default list-inline mb-0">
                <li className="list-inline-item mr-3"><a className="cyan-text" href="/"><MDBIcon className="mr-2" icon="home"  />Home</a></li>
                <li className="list-inline-item mr-3"><a className="cyan-text" href=""><MDBIcon className="mr-2" icon="user" />Profile</a></li>
              </ul>
            </MDBCardHeader>
            <MDBMedia className="p-4 bg-white">
              <MDBMedia >
                <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src={`${largeProfileUrl}`} alt="" />
              </MDBMedia>
              <MDBMedia body>
                <h4 className="font-weight-bold text-default mt-0">
                  {invite.celeb}
                </h4>
                  <span className="pt-0"><h5>From {invite.user}</h5></span>
                <ul className="list-unstyled list-inline mb-2 pt-1 more-padding">
                  <li className="list-inline-item">
                      <MDBIcon fas className="cyan-text" size="md" icon="poll"/><span className="font-weight-bold"> Type:</span> {invite.event_type}
                  </li>&nbsp; &nbsp;
                  <li className="list-inline-item">
                      <MDBIcon fas className="cyan-text" size="md" icon="headset"/><span className="font-weight-bold"> Role:</span> {invite.role}
                  </li>&nbsp; &nbsp;
                  <li className="list-inline-item">
                      <MDBIcon fas className="cyan-text" size="md" icon="map-marker-alt"/><span className="font-weight-bold"> City:</span> {invite.city}
                  </li>&nbsp; &nbsp;
                  <li className="list-inline-item">
                      <MDBIcon fas className="cyan-text" size="md" icon="city"/><span className="font-weight-bold"> Venue:</span> {invite.venue}
                  </li>&nbsp; &nbsp;
                  <li className="list-inline-item">
                      <MDBIcon fas className="cyan-text" size="md" icon="calendar-check"/><span className="font-weight-bold">  Date:</span> {invite.event_date}
                  </li>
                </ul>
                <p className="font-weight-bold">{invite.description}</p>
              </MDBMedia>
            </MDBMedia>
          </MDBContainer>
    );
}

export default InviteSent;