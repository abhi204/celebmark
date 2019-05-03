import React from 'react';
import { MDBContainer,MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

let PaymentDone = (props) => {
    if(props.purpose.startsWith('subscribe'))
    {   
      let plan = props.purpose.split(' ')[1]
      return (
        <div className="mt-5 mb-0">
                <MDBContainer>
                    <h3 className="text-center">
                      Congratulations ! You have successfully subscribed to our
                      <strong className="green-text"> {plan}</strong> plan.
                    </h3><br/>

                    <section className="my-5">
                      <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Features of <strong>{plan}</strong> plan !
                      </h2>
                      <MDBRow>
                        <MDBCol md="4" className="md-0 mb-5">
                          <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                              <MDBIcon icon="bullhorn" size="2x" className="blue-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                              <h4 className="font-weight-bold">Invites</h4>
                              <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="md-0 mb-5">
                          <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                              <MDBIcon icon="clock" size="2x" className="pink-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                              <h4 className="font-weight-bold">Validity</h4>
                              <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="md-0 mb-5">
                          <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                              <MDBIcon icon="headset" size="2x" className="purple-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                              <h4 className="font-weight-bold">Support</h4>
                              <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                        <MDBRow>
                        <MDBCol md="4" className="md-0 mb-5">
                          <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                              <MDBIcon icon="glass-martini-alt" size="2x" className="blue-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                              <h4 className="font-weight-bold">Post Invites</h4>
                              <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="md-0 mb-5">
                          <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                              <MDBIcon icon="credit-card" size="2x" className="pink-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                              <h4 className="font-weight-bold">Refund</h4>
                              <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="md-0 mb-5">
                          <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                              <MDBIcon icon="tachometer-alt" size="2x" className="purple-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                              <h4 className="font-weight-bold">Priority</h4>
                              <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </section>

                    <h3 className="text-center">
                      Go ahead & start inviting your celebrity & enjoy the
                      <strong className="green-text"> {plan}</strong> plan.
                    </h3>

                  </MDBContainer>
            </div>
        );
    }
    else
        return (
            <div>
                Payment Was Successfully verified!
            </div>
        );
}



export default PaymentDone;

