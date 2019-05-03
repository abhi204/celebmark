import React, { Component } from 'react';
import {
    MDBCol,
    MDBIcon
} from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import { API_HOST } from '_consts/api';
import './celeb_card.css'

class CelebCard extends Component {

    render(){
        const { name, profile_pic, user_name, category } = this.props
        return (
            <MDBCol sm="6" md="4">
            <Link to={`/profile/${user_name}`}>
              <div className="cards mt-3 text-right float-left ">
                    <div className="card-left p-0">
                        <img className="h-100 m-0" src={`${API_HOST}/${profile_pic}`} alt={user_name}/>
                    </div>
                    <div className="card-right">
                        <h4 className="font-weight-bold mb-0 black-text card-title">{name}</h4>
                        <div className="font-weight-light pb-0 card-meta grey-text">
                            <span>{category}</span>
                        </div>
                    </div>
                    <div className="pr-3 ml-auto d-flex flex-column justify-content-center">
                        <MDBIcon className="red-text" icon="chevron-right" />
                    </div>
                </div>
            </Link>
            </MDBCol>
        );
    }
}

export default withRouter(CelebCard);

