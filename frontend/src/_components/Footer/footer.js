import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";
import './footer.css'
import './footer.css';

export default class Footer extends Component {
  render(){
    return (
      <MDBFooter className="page-footer font-small foot">
        <div style={ {backgroundColor:'white', padding:'16px' } }>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6" lg="5" className="text-center text-md-left mb-1 mb-md-0">
                <h6 className="mb-0 black-text">
               <a href="https://www.celebmark.com" className="black-text"> CelebMark </a> &copy; {new Date().getFullYear()} - All Rights Reserved
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right mt-2">
                <a className="fb-ic ml-0 mr-3" href="https://www.facebook.com/celebmark/">
                  <MDBIcon fab icon="facebook-square" size="lg"/>
                </a>
                <a className="li-ic mr-3" href="https://www.linkedin.com/company/celebmark/">
                  <MDBIcon fab icon="linkedin-in" size="lg"/>
                </a>
                <a className="ins-ic" href="https://www.instagram.com/celebmark/">
                  <MDBIcon fab icon="instagram" size="lg"/>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
