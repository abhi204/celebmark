import React from 'react';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FetchPayDetail = (props) => (
    <div>
        <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-3">
          Fetching Transaction Details
        </h2>
        <p className="lead red-text w-responsive mx-auto mb-5">
          Please donot press any key or refresh the page.
        </p>
        <MDBRow>
          <MDBCol md="4"> </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="money-check-alt" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-2">Processing your request</h5>
            <p className="grey-text mb-md-0 mb-5">
              Please wait...
            </p>
          </MDBCol>
          <MDBCol md="4"> </MDBCol>
        </MDBRow>
      </section>
    </div>
)

export default FetchPayDetail;


