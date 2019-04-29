import React from 'react';

let PaymentDone = (props) => {
    if(props.purpose === 'invite')
        return (
            <div>
                Invite Was Successfully sent!
            </div>
        );
    else
        return (
            <div>
                Payment Was Successfully verified!
            </div>
        );
}

export default PaymentDone;