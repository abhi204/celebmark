import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBView, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBMask, MDBIcon } from 'mdbreact';

class ResultSection extends Component {
    
    render(){
        return (
          <div>
          <MDBCard>
            <MDBCardBody>
              <MDBRow>
                <MDBCol className="d-flex" size="3">
                    <img
                      className="img-fluid rounded-circle"
                      src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                      alt=""
                    />
                </MDBCol>
                <MDBCol size="6">
                  <a href="#!" className="green-text">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="utensils" className="pr-2" />
                      Singer
                    </h6>
                  </a>
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Deep Narayan</strong>
                  </h3>
                  <p>
                    Stars
                  </p>
                   <p>deep</p> 
                </MDBCol>
                <MDBCol className="d-flex flex-column-reverse" size="3">
                    <MDBBtn color="success" size="md" className="waves-light ">
                        Profile
                    </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
          <hr/>
        </div>
        );
    }
}




export default ResultSection;


