import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'
import './footer.css';

export default class Footer extends Component {
  render(){
    return (
      <MDBFooter className="page-footer font-small foot">
        <div>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6" lg="5" className="text-center text-md-left mb-1 mb-md-0">
                <h6 className="mb-0 grey-text">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.celebmark.com" className="black-text"> CelebMark.com </a>
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a className="fb-ic ml-0 mr-3" href="https://www.facebook.com/celebmark/">
                  <i className="fab fa-facebook-f grey-text mr-lg-4"> </i>
                </a>
                <a className="li-ic mr-3" href="https://www.linkedin.com/company/celebmark/">
                  <i className="fab fa-linkedin-in grey-text mr-lg-4"> </i>
                </a>
                <a className="ins-ic" href="https://www.instagram.com/celebmark/">
                  <i className="fab fa-instagram grey-text mr-lg-4"> </i>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
