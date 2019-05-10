import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';
import "./setting.css";

class SettingsSection extends Component {

    render() {
        return (
            <div>
                <MDBRow className="big-screen-margin-setting">
                    <MDBCol md="6" className="big-screen-margin-setting">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4">Update Details</p>
                                    <div className="grey-text">
                                        <MDBInput label="Update First Name" icon="user-edit" group type="text" validate error="wrong" success="right" />
                                        <MDBInput label="Update Last Name" icon="user-edit" group type="text" validate error="wrong" success="right" />
                                        <MDBInput label="Update Email" icon="envelope" group type="text" validate error="wrong" success="right" />
                                        <MDBInput label="Update Phone" icon="mobile-alt" group type="text" validate error="wrong" success="right" />
                                        <MDBInput label="Enter Password " icon="lock" group type="text" validate error="wrong" success="right" />

                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn rounded color="cyan" type="submit">
                                            Update Details
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default withRouter(SettingsSection);