import React from 'react';
import { API_HOST } from '_consts/api';
import { Link } from 'react-router-dom';
import { MDBCol, MDBIcon } from 'mdbreact';

let BookmarkCard = ({ celeb }) => (
    <MDBCol sm="11" md="9" lg="6" className="mt-3">
        <Link to={`/profile/${celeb.user_name}`}>
            <div className="cards mt-3 text-right float-left ">
                <div className="card-left p-0">
                    <img className="h-100 m-0" src={`${API_HOST}/${celeb.profile_pic}`} alt=""/>
                </div>
                <div className="card-right">
                    <h4 className="font-weight-bold mb-0 black-text card-title">
                        {celeb.first_name} {celeb.last_name}
                    </h4>
                    <div className="font-weight-light pb-0 card-meta grey-text">
                        <span>{celeb.category}</span>
                    </div>
                </div>
                <div className="pr-3 ml-auto d-flex flex-column justify-content-center">
                    <MDBIcon className="red-text" icon="chevron-right"/>
                </div>
            </div>
        </Link>
    </MDBCol>
)

export default BookmarkCard;