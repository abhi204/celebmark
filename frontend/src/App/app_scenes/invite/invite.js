import React, {Component} from 'react';
import { connect } from 'react-redux';
import InviteForm from './forms/invite_form';
import { getYMDFormat } from '_helpers/date_convertor';
import InviteSent from './invite_sent';

class InvitePage extends Component {
    render() {
        const { state } = this.props.location ;
        const { userDetails, match } = this.props ;

        return (
            <div style={{backgroundColor: "white"}}>
                <br/>
                {
                    state && state.inviteSent
                    ?
                    <InviteSent invite={state.invite} />
                    :
                    <InviteForm
                        initialValues={{
                            user: userDetails.user_name,
                            celeb: match.params.celeb,
                            event_date: getYMDFormat(new Date())
                        }}
                        className="invite-form"
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = state => (
    { 
        userDetails: state.user.details
    }
)
export default connect(mapStateToProps,)(InvitePage);