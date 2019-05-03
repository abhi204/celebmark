import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn,MDBContainer } from "mdbreact";

class DetailsSection extends Component {

    render(){
        return(
            <MDBContainer>
                <MDBCard className="mt-1 px-5 py-3">
                  <MDBCardBody>
                    <MDBRow className="pt-3 mb-3 ">
                      <MDBCol lg="3">
                        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol className="pl-4" lg="5">
                        <a href="#!" className="blue-text">
                          <h6 className="font-weight-bold mb-3">
                            <MDBIcon icon="info-circle" className="pr-2" />
                            Profile Details
                          </h6>
                        </a>
                        <h4 className="font-weight-bold mb-2 p-0">
                            <MDBIcon fas icon="user-circle" size="md" className="pink-text"/>&nbsp;
                          <strong> Deep Narayan Tandan</strong>
                        </h4>
                        <h6 className="font-weight-bold mb-2 p-0">
                            <MDBIcon fas icon="at" size="lg" className="pink-text"/>&nbsp;&nbsp;
                          <strong> deepnarayan006@gmail.com</strong>
                        </h6>
                        <h6 className="font-weight-bold mb-2 p-0">&nbsp;
                            <MDBIcon fas icon="mobile" size="lg" className="pink-text"/>&nbsp;&nbsp;&nbsp;
                          <strong> +91 9982168317</strong>
                        </h6>
                        <h6 className="font-weight-bold mb-2 p-0">&nbsp;
                            <MDBIcon fas icon="credit-card" size="md" className="pink-text"/>&nbsp;&nbsp;
                          <strong> Free Plan</strong>
                        </h6>

                        <p>
                          <MDBIcon icon="angle-double-right" size="lg" className="pink-text"/>&nbsp;&nbsp;
                            Last <strong> updated </strong> on , 19/08/2018
                        </p>
                      </MDBCol>
                      <MDBCol lg="3" className="text-center mt-5">
                        <MDBBtn rounded color="info">
                          <MDBIcon icon="pen" className="mr-1" /> Edit Details
                        </MDBBtn>
                      </MDBCol>

                    </MDBRow>
                      <hr className="my-1" />
                    <MDBRow>
                        <MDBCardBody cascade className="text-center my-4">
                            <h2 className="font-weight-bold">
                                <MDBIcon icon="layer-group" size="md" className="pink-text pr-2"/>
                              <strong> Statistics</strong>
                            </h2>
                            <h5 className="pt-1 pb-2">
                              Updated On
                              <a href="#!">
                                <strong> 24/05/2019</strong>
                              </a>
                            </h5>
                            <MDBBtn rounded className="btn-fb waves-light">
                              <MDBIcon  icon="gift" className="pr-2" />
                              <strong>Invite Sent</strong>
                            </MDBBtn>
                            <span className="counter">46</span>
                            <MDBBtn rounded className="btn-tw waves-light">
                              <MDBIcon far icon="bell" className="pr-2" />
                             <strong> Invite Remaining</strong>
                            </MDBBtn>
                            <span className="counter">22</span>
                            <MDBBtn rounded className=" waves-light">
                              <MDBIcon icon="comments" className="pr-2" />
                              <strong>Invite Accepeted</strong>
                            </MDBBtn>
                            <span className="counter">31</span>
                            <MDBBtn rounded className="btn-gplus waves-light">
                              <MDBIcon icon="ban" className="pr-2" />
                              <strong>Invite Cancelled</strong>
                            </MDBBtn>
                            <span className="counter">18</span>
                          </MDBCardBody>
                    </MDBRow>
                      <hr className="my-1" />
                    <MDBRow>
                      <MDBContainer>
                          <section className="my-3">
                              <h2 className="h1-responsive font-weight-bold text-center my-5">
                                  <MDBIcon icon="feather-alt" size="md" className="blue-text mr-2" rotate="90" flip="horizontal"/>
                                  Features of <strong>Free</strong> plan !
                              </h2>
                              <MDBRow>
                                  <MDBCol md="4" className="md-0 mb-5">
                                      <MDBRow>
                                          <MDBCol lg="2" md="3" size="2">
                                              <MDBIcon icon="bullhorn" size="2x" className="blue-text"/>
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
                                              <MDBIcon icon="clock" size="2x" className="pink-text"/>
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
                                              <MDBIcon icon="headset" size="2x" className="purple-text"/>
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

                  </MDBContainer>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default withRouter(DetailsSection);

