import React, { Component } from 'react';
import {
    MDBCol,
    MDBIcon,
    MDBCardHeader,
    MDBMedia,
    MDBContainer,
    MDBRow
} from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import { API_HOST } from '_consts/api';
import './celeb_card.css'
import { largeProfileUrl } from '_consts/dummy';

class CelebCard extends Component {

    render(){
        const { name, profile_pic, user_name } = this.props
        return (
              <MDBRow>
                  <MDBCol xl="2" lg="2" md="1" sm="1"></MDBCol>
                  <MDBCol xl="8" lg="8" md="10" sm="10" xs="12">
                      <MDBContainer fluid className="mt-3 border border-dark rounded">
                        <MDBCardHeader className="border-0 mt-3 font-weight-bold d-flex justify-content-between">
                          <p className="mr-4 mb-0">{name}</p>
                          <ul className="list-unstyled text-default list-inline mb-0">
                            <li className="list-inline-item mr-3"><a className="cyan-text" href={`/profile/${user_name}`}><MDBIcon className="mr-2" icon="user" />Profile</a></li>
                          </ul>
                        </MDBCardHeader>
                        <MDBMedia className="p-4 bg-white">
                          <MDBMedia >
                            <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src={`${largeProfileUrl}`} alt="" />
                          </MDBMedia>
                          <MDBMedia body>
                            <ul className="list-unstyled list-inline mb-2 pt-1 more-padding">
                            <li className="list-inline-item">
                              <MDBIcon fas className="green-text" size="lg" icon="user-circle"/><span className="font-weight-bold"> Artist:</span> {name}
                              </li>
                                <br/>
                              <li className="list-inline-item">
                                  <MDBIcon fas className="green-text" size="lg" icon="poll"/><span className="font-weight-bold"> Type:</span> MUSICIAN//
                              </li>
                                <br/>
                              <li className="list-inline-item">
                                  <MDBIcon fas className="green-text" size="lg" icon="map-marker-alt"/><span className="font-weight-bold"> City:</span> Patna
                              </li>
                                <br/>
                              <li className="list-inline-item pl-0">
                                <h5>
                                  <MDBIcon icon="star" className="lime-text pl-2" />
                                  <MDBIcon icon="star" className="lime-text" />
                                  <MDBIcon icon="star" className="lime-text" />
                                  <MDBIcon icon="star" className="lime-text" />
                                  <MDBIcon far icon="star-half" className="lime-text" />
                                </h5>
                              </li>

                            </ul>
                            <p className="font-weight-bold"></p>
                          </MDBMedia>
                        </MDBMedia>
                      </MDBContainer>
                  </MDBCol>
                  <MDBCol xl="2" lg="2" md="1" sm="1"></MDBCol>
              </MDBRow>

        );
    }
}

export default withRouter(CelebCard);
