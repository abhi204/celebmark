import React, {Component} from 'react';
import { connect } from 'react-redux';
import InviteForm from './forms/invite_form';
import { getYMDFormat } from '_helpers/date_convertor';

class InvitePage extends Component {
    render() {
        const { userDetails, profile } = this.props;
        return (
            <div style={{backgroundColor: "white"}}>
                <br/>
                <InviteForm
                    initialValues={{
                        user: userDetails.user_name,
                        celeb: profile.user_name,
                        event_date: getYMDFormat(new Date())
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => (
    { 
        profile: state.profile,
        userDetails: state.user.details
    }
)
export default connect(mapStateToProps,)(InvitePage);