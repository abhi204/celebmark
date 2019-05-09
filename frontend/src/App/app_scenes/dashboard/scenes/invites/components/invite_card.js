import React from 'react';
import { 
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBBtn,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBIcon,
} from 'mdbreact';

let InviteCard = ({invite}) => {
    return (
        <MDBCol  lg="4" className="my-3 px-2 py-4 mr-3 float-left responsive-card-width-invite">
           <MDBCard cascade>
              <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                <h2 className="h2-responsive mb-2">{invite.celeb_name}</h2>
                <p className="">
                  <MDBIcon icon="calendar-alt" /> {invite.event_date}</p>
              </MDBCardImage>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle><MDBIcon far icon="dot-circle"/> Invite Status</MDBCardTitle>
                <MDBCardText className="text-capitalize green-text">{invite.status}</MDBCardText>
                <MDBBtn rounded color="info" className="black-text font-weight-bold">
                    <MDBIcon icon="clone left" /> View Details
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}

export default InviteCard;