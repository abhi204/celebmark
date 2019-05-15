import React, { Component } from 'react';
import Carousel from '_components/carousel/carousel';
import SubscriptionCards from './containers/subscription_cards/subscription_cards'
import { MDBContainer } from 'mdbreact';
import { withRouter } from 'react-router-dom';


class AppHome extends Component {

    render(){
        return (
            <div>
                <Carousel/>
                <br/>
                <MDBContainer>
                    {/* <SponsorSlider/> */}
                    <center><SubscriptionCards/></center>
                </MDBContainer>
            </div>
        );
    }
}

export default withRouter(AppHome);