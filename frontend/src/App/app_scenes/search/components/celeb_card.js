import React, { Component } from 'react';
import {
    MDBCol,
} from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import { API_HOST } from '_consts/api';
import './celeb_card.css'

class CelebCard extends Component {

    render(){
        const { name, profile_pic, user_name, category } = this.props
        return (
            <MDBCol>
            <Link to={`/profile/${user_name}`}>
              <div className="cards mt-4 ml-4 text-right float-left ">
                    <div className="card-left p-0">
                        <img className="h-100 m-0" src={`${API_HOST}/${profile_pic}`} alt={user_name}/>
                    </div>
                    <div className="pt-5 card-right">
                        <h3 className="font-weight-bold card-title">{name}</h3>
                        <div className="font-weight-light card-meta grey-text">
                            <span>{category}</span>
                        </div>
                    </div>
                </div>
            </Link>
            </MDBCol>
        );
    }
}

export default withRouter(CelebCard);

