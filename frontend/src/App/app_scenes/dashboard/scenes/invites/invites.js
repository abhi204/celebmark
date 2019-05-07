import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {
    MDBIcon,
    MDBRow,
} from "mdbreact";
import InviteCard from './components/invite_card'
import "./invite.css";

class InvitesSection extends Component {

    render() {
        return (
            <div>
                <h4 className="h4-responsive text-center mt-5 black-text" color=" teal darken-1">
                    <MDBIcon icon="gift" size="md" className="pink-text mr-2"/>
                    <strong>Invites</strong>
                </h4>
                <div className="big-screen-margin-invite">
                    <MDBRow>
                        <InviteCard/>                   
                    </MDBRow>
                </div>
            </div>
        );
    }
}

export default withRouter(InvitesSection);
