import React, { Component } from 'react';
import Carousel from '_components/carousel/carousel';
import SponsorSlider from '_components/sponsor_list/sponsor_list';
import SubscriptionCards from './containers/subscription_cards/subscription_cards'
import { MDBContainer } from 'mdbreact';


class AppHome extends Component {

    render(){
        return (
            <div>
                <Carousel/>
                <br/>
                <MDBContainer>
                    <SponsorSlider/>
                    <center><SubscriptionCards/></center>
                </MDBContainer>
            </div>
        );
    }
}

export default AppHome;