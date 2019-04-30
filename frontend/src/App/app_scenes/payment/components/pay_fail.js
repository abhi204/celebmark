import React from 'react';
import {MDBCardHeader, MDBContainer, MDBIcon, MDBMedia} from "mdbreact";

let PaymentFail = (props) => {
    if(props.purpose === 'invite')
        return (
            <div className="mt-5">
                <MDBContainer>
                    <h3 className="red-text font-weight-bold ">Invitation Sent Failed</h3><br/>
                    <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                      <p className="mr-4 mb-0">Your invitation for following celebrity was not sent due to payment processing issues</p>
                      <ul className="list-unstyled text-default list-inline mb-0">
                        <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="home"  />Home</li>
                        <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />Profile</li>
                      </ul>
                    </MDBCardHeader>
                    <MDBMedia className="p-4 bg-white">
                      <MDBMedia >
                        <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
                      </MDBMedia>
                      <MDBMedia body>
                        <h3 className="font-weight-bold text-default mt-0">
                          Danny Newman
                        </h3>
                        <ul className="list-unstyled list-inline mb-2 pt-1 more-padding">
                          <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="facebook" />
                          </li>
                          <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="twitter" />
                          </li>
                          <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="google-plus" />
                          </li>
                          <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="linkedin" />
                          </li>
                          <li className="list-inline-item">
                            <MDBIcon fab className="grey-text" size="lg" icon="instagram" />
                          </li>
                        </ul>
                        <p className="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
                        magnam.</p>
                      </MDBMedia>
                    </MDBMedia>
                  </MDBContainer>
            </div>
        );
    else
        return (
          <div className="mt-5">
          <MDBContainer>
              <h3 className="red-text font-weight-bold ">Failed to process Payment</h3><br/>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Seems like the payment transaction didn't complete Successfully</p>
                <ul className="list-unstyled text-default list-inline mb-0">
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="home"  />Home</li>
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />Profile</li>
                </ul>
              </MDBCardHeader>
            </MDBContainer>
          </div>
        );
}

export default PaymentFail;