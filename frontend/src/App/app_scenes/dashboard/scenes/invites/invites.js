import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link, withRouter} from 'react-router-dom';
import {
    MDBIcon,
    MDBRow,
} from "mdbreact";
import InviteCard from './components/invite_card';
import "./invite.css";
import getInvites from './actions/invites';

class InvitesSection extends Component {

    componentDidMount(){
        this.props.getInvites();
    }

    render() {
        const { invites } = this.props;
        let { inviteList } = invites;
        return (
            <div>
                <h4 className="h4-responsive text-center mt-5 black-text" color=" teal darken-1">
                    <MDBIcon icon="gift" size="md" className="pink-text mr-2"/>
                    <strong>Invites</strong>
                </h4>
                <div className="big-screen-margin-invite">
                {
                    ( invites.loading && <div>Loading...</div> )
                    ||
                    ( invites.error && <div>FAILED</div> )
                    ||
                    ( 
                      ( inviteList && inviteList.length ) 
                      &&
                      <MDBRow>
                      {
                        inviteList.map( invite => <InviteCard invite={invite} key={invite.id}/>)
                      }
                      </MDBRow>
                    )
                }
                {
                    
                }
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    invites: state.invites
})

const mapDispatchToProps = {
    getInvites
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InvitesSection));
