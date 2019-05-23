import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import UpdateUserForm from './forms/update_user_form';
import {MDBRow, MDBCol, MDBCard, MDBCardBody} from 'mdbreact';

import "./settings.css";

class SettingsSection extends Component {

    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol md="6" className="m-4">
                        <MDBCard>
                            <MDBCardBody>
                                <p className="h4 text-center py-4">Update Details</p>
                                <div className="grey-text">
                                    <UpdateUserForm />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps)(SettingsSection));