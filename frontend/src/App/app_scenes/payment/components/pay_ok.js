import React from 'react';
import { MDBContainer } from "mdbreact";

let PaymentDone = (props) => {
    if(props.purpose.startsWith('subscribe'))
    {   
      let plan = props.purpose.split(' ')[1]
      return (
        <div className="mt-5">
                <MDBContainer>
                    <h3 className="">
                      You have Successfully Subscribed to our
                      <strong> {plan}</strong> plan
                    </h3><br/>
                  </MDBContainer>
            </div>
        );
    }
    else
        return (
            <div>
                Payment Was Successfully verified!
            </div>
        );
}



export default PaymentDone;