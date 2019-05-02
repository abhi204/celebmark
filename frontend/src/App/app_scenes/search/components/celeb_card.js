import React, { Component } from 'react';
import {
    MDBCol,
    MDBIcon,
    MDBCardHeader,
    MDBMedia,
    MDBContainer,
    MDBRow,MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter,
} from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import { API_HOST } from '_consts/api';
import './celeb_card.css'
import { largeProfileUrl } from '_consts/dummy';

class CelebCard extends Component {

    render(){
        const { name, profile_pic, user_name } = this.props
        return (

            <MDBCol >
              <div className="cards mt-4 ml-4 text-right float-left  ">
                    <div className="card-left">
                        <img src="https://laracasts.com/images/series/2018/the-php-practitioner.svg"/>
                    </div>
                    <div className="pt-5 card-right">
                        <a className="black-text " href={`/profile/${user_name}`}>
                            <h3 className="font-weight-bold card-title">{name}</h3>
                        </a>
                        <div className="card-meta">
                                <span><h5 className="pt-2"> Musician </h5></span>
                        </div>

                    </div>

                </div>
            </MDBCol>
        );
    }
}

export default withRouter(CelebCard);

