import React, { Component } from 'react';
import { MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon } from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import { API_HOST } from '_consts/api';
import './celeb_card.css'

class CelebCard extends Component {

    render(){
        const { name, profile_pic, user_name } = this.props
        return (
          <div className="ml-3 mb-3" style={{width: "12em"}} >
            <Link to={`/profile/${user_name}`} >
              <MDBCard testimonial className="w-100 h-100">
              <MDBCardUp color="green darken-1" />
              <MDBAvatar className="mx-auto white">
                <img
                  src={`${API_HOST}/${profile_pic}`}
                  alt={user_name}
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4 black-text">{name}</h4>
                <h5>
                  <MDBIcon icon="star" className="lime-text pl-2" />
                  <MDBIcon icon="star" className="lime-text" />
                  <MDBIcon icon="star" className="lime-text" />
                  <MDBIcon icon="star" className="lime-text" />
                  <MDBIcon far icon="star-half" className="lime-text" />
                </h5>
              </MDBCardBody>
              </MDBCard>
            </Link>
          </div>
        );
    }
}

export default withRouter(CelebCard);
