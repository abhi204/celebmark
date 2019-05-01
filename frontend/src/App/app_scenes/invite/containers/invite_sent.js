import React, { Component } from 'react';
import {MDBCardHeader, MDBContainer, MDBIcon, MDBMedia, MDBSpinner} from "mdbreact";
import { Link } from 'react-router-dom';
import { getCelebProfile } from '_actions/profile';
import { connect } from 'react-redux';
import { API_HOST } from '_consts/api';

class InviteSent extends Component {
  state = {celeb: null}

  static getDerivedStateFromProps({ invite, getCelebProfile }, prevState){
    if(invite.celeb !== prevState.celeb)
    {
      getCelebProfile(invite.celeb);
      return { celeb: invite.celeb}
    }
    return null
  }

  render(){
    const { celebProfile, invite, user } = this.props;
    if (celebProfile.loading)
            return (
            <MDBContainer className="mt-5 p-5 z-depth-1 border border-light rounded">
              <center><MDBSpinner green /></center>
            </MDBContainer>
            )
        else if (!celebProfile.loading && !celebProfile.user_name)
        {
          return (
            <MDBContainer className="mt-5 p-5 z-depth-1 border border-light rounded">
              <center>Unknown Error Occured</center>
            </MDBContainer>
            )
        }
        else
            return (
              <MDBContainer className="mt-5 z-depth-1 border border-light rounded">
              <h3 className="text-center green-text font-weight-bold mt-4 ">Invitation Sent Successfully</h3><br/>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">You will be notified of the invite status shortly</p>
                <ul className="list-unstyled text-default list-inline mb-0">
                  <li className="list-inline-item mr-3"><Link className="cyan-text" to="/"><MDBIcon className="mr-2" icon="home"/>Home</Link></li>
                  <li className="list-inline-item mr-3"><Link className="cyan-text" to={`/profile/${celebProfile.user_name}`}><MDBIcon className="mr-2" icon="user"/>Profile</Link></li>
                </ul>
              </MDBCardHeader>
              <MDBMedia className="p-4 bg-white">
                <MDBMedia >
                  <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src={`${API_HOST}/${celebProfile.profile_pic}`} alt="" />
                </MDBMedia>
                <MDBMedia body>
                  <h4 className="font-weight-bold mt-0">
                    {celebProfile.first_name} {celebProfile.last_name}
                  </h4>
                    <span className="pt-0"><h4><small>From: </small>{user.user_name}</h4></span>
                  <ul className="list-unstyled list-inline mb-2 pt-2  more-padding">
                    <li className="list-inline-item m-1">
                        <MDBIcon fas className="cyan-text" size="md" icon="poll"/><span className="font-weight-bold">&nbsp;Event Type:</span> {invite.event_type}
                    </li>&nbsp; &nbsp;
                    <li className="list-inline-item m-1">
                        <MDBIcon fas className="cyan-text" size="md" icon="headset"/><span className="font-weight-bold">&nbsp;Celebrity Role:</span> {invite.role}
                    </li>&nbsp; &nbsp;
                    <li className="list-inline-item m-1">
                        <MDBIcon fas className="cyan-text" size="md" icon="map-marker-alt"/><span className="font-weight-bold">&nbsp;Event City:</span> {invite.city}
                    </li>&nbsp; &nbsp;
                    <li className="list-inline-item m-1">
                        <MDBIcon fas className="cyan-text" size="md" icon="city"/><span className="font-weight-bold">&nbsp;Event Venue:</span> {invite.venue}
                    </li>&nbsp; &nbsp;
                    <li className="list-inline-item m-1">
                        <MDBIcon fas className="cyan-text" size="md" icon="calendar-check"/><span className="font-weight-bold">&nbsp;Event Date:</span> {invite.event_date}
                    </li>
                  </ul>
                </MDBMedia>
              </MDBMedia>
            </MDBContainer>
            );
  }
}


let mapStateToProps = (state) => ({
  celebProfile: state.profile,
  user: state.user.details,
})

const mapDispatchToProps = {
  getCelebProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteSent);