import React, { Component } from 'react';
import 'url-search-params-polyfill';
import axios from 'axios';
import { API_PAYMENT_CHECK } from '_consts/api';
import { getCookie } from '_helpers/cookies';
import PaymentDone from './components/pay_ok';
import PaymentFail from './components/pay_fail';
import FetchPayDetail from './components/pay_fetch';
import { withRouter } from 'react-router-dom';

class PaymentCheckPage extends Component {
    constructor(props){
        super(props);
        this.getPaymentStatus = this.getPaymentStatus.bind(this);
        this.state = { fetching: true, response: { } };
    }

    getPaymentStatus(paymentDetails){
        axios.post(API_PAYMENT_CHECK, paymentDetails,{ headers: { 'Authorization': `Bearer ${getCookie('access')}`}})
            .then( ({data}) => this.setState({fetching: false, response: data}) )
            .catch(error => this.setState({fetching: false}))
        
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