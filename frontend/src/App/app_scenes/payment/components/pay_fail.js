import React from 'react';

let PaymentFail = (props) => {
    if(props.purpose === 'invite')
        return (
            <div>
                Invite Was Not sent due to payment processing Issues
            </div>
        );
    else
        return (
            <div>
                Payment Failed
            </div>
        );
}

export default PaymentFail;