import React, { Component } from 'react';
import 'url-search-params-polyfill';
import axios from 'axios';
import { API_PAYMENT_CHECK } from '_consts/api';
import { getCookie } from '_helpers/cookies';
import PaymentDone from './components/pay_ok';
import PaymentFail from './components/pay_fail';
import FetchPayDetail from './components/pay_fetch';

class PaymentCheckPage extends Component {
    constructor(props){
        super(props);
        this.getPaymentStatus = this.getPaymentStatus.bind(this);
        this.state = { fetching: true, response: null };
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
    
    render(){
        const { fetching, response } = this.state;
        if(fetching)
            return <FetchPayDetail/>
        if(response.status === "Credit")
            return <PaymentDone purpose={response.purpose} />
        else
            return <PaymentFail purpose={response.purpose} />
    }
}

export default PaymentCheckPage;