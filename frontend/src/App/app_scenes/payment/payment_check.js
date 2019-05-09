import React, { Component } from 'react';
import 'url-search-params-polyfill';
import { API_PAYMENT_CHECK } from '_consts/api';
import PaymentDone from './components/pay_ok';
import PaymentFail from './components/pay_fail';
import FetchPayDetail from './components/pay_fetch';
import { withRouter } from 'react-router-dom';
import { store } from 'index';

class PaymentCheckPage extends Component {
    constructor(props){
        super(props);
        this.getPaymentStatus = this.getPaymentStatus.bind(this);
        this.state = { fetching: true, response: { } };
    }

    getPaymentStatus(paymentDetails){
        store.dispatch({
            meta:{
                type: 'api',
                url: API_PAYMENT_CHECK,
                method: 'post',
                data: paymentDetails,
                then: (apiResponse, okStatus) => {
                    if(okStatus)
                        this.setState({fetching: false, response: apiResponse.data })
                    else
                        this.setState({fetching: false})
                }
            }
        })
        
    }

    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        const payment_id = params.get('payment_id');
        const payment_request_id = params.get('payment_request_id');
        if(payment_id && payment_request_id)
        {
            this.getPaymentStatus({ payment_id, payment_request_id })
            this.setState({ fetching: true });
        }
        else
            this.setState({ fetching: false });
    }
    
    componentDidUpdate(){
        const { response } = this.state;
        const { payment } = response;
        if( payment && payment.purpose.startsWith('invite')) // Invite Related Payments
        {
            this.props.history.replace({
                pathname: `/invite/${response.invite.celeb}`,
                state: { 
                    inviteSent: Boolean(response.payment.status === "Credit"),
                    invite: response.invite
                }
            })
        }
    }

    render(){
        const { fetching, response } = this.state;
        const { payment } = response;

        if(fetching)
        {
            return <FetchPayDetail/>
        }
        else if((!payment || payment.status !== "Credit") && response.invite === null) // Non-invite Payment Failed
        {
            return <PaymentFail purpose={payment.purpose}/>
        }
        return <PaymentDone purpose={payment.purpose}/>
    }
}

export default withRouter(PaymentCheckPage);