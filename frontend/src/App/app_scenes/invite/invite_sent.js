import React from 'react';

const InviteSent = ({invite}) => {
    return (
        <div>
            INVITE SENT TO {invite.celeb} from {invite.user}
            TYPE OF EVENT: {invite.event_type}
            ROLE OF CELEB : {invite.role}
            CITY: {invite.city}
            VENUE: {invite.venue}
            EVENT DATE: {invite.event_date}
            DESCRIPTION: {invite.description}
        </div>
    );
}

export default InviteSent;