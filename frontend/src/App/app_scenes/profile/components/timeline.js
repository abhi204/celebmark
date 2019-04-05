import React, { Component } from 'react';
import { timelineBg } from '_consts/dummy';
import { MDBJumbotron, MDBContainer, MDBMedia, MDBBtn, MDBIcon } from 'mdbreact';
import { API_HOST } from '_consts/api';
import './timeline.css'

class Timeline extends Component {
    render(){
        const { celeb } = this.props;
        const { handles } = celeb;
        return(
            <MDBJumbotron fluid 
              className="mb-0 z-depth-0 sticky-timeline"
              style={{ backgroundImage: `url(${timelineBg})`}}
            >
                <MDBContainer>
                <MDBMedia>
                    <MDBMedia left className="mr-3">
                        <MDBMedia object 
                          style={{height: "12rem", width: "12rem" }}
                          src={`${API_HOST}/${celeb.profile_pic}`} 
                          className="rounded-circle img-fluid" alt={celeb.user_name}
                        />
                    </MDBMedia>
                    <MDBMedia body className="mt-3">
                        <MDBMedia heading>
                        <h2><strong className="text-white mb-2"> { celeb.first_name } { celeb.last_name } </strong></h2>
                        </MDBMedia>
                        <span>{ celeb.category }</span>
                        <div className="handles mt-1">
                        <MDBBtn className="ml-0" size="sm" tag="a" floating social="yt" hidden={!handles.youtube}>
                            <MDBIcon fab icon="youtube" size="2x"/>
                        </MDBBtn>
                        <MDBBtn size="sm" tag="a" floating social="fb" hidden={!handles.facebook}>
                            <MDBIcon fab icon="facebook-f" size="2x" />
                        </MDBBtn>
                        <MDBBtn size="sm" tag="a" floating social="tw" hidden={!handles.twitter}>
                            <MDBIcon fab icon="twitter" size="2x"/>
                        </MDBBtn>
                        <MDBBtn color="warning" size="sm" tag="a" floating social="so" hidden={!handles.instagram}>
                            <MDBIcon fab icon="instagram" size="2x"/>
                        </MDBBtn>
                        <MDBBtn size="sm" tag="a" floating social="git" hidden={!handles.patreon}>
                            <MDBIcon fab icon="patreon" size="2x"/>
                        </MDBBtn>
                        <MDBBtn size="sm" tag="a" floating social="email" hidden={!handles.website}>
                            <MDBIcon icon="link" size="2x"/>
                        </MDBBtn>
                        </div>
                    </MDBMedia>
                </MDBMedia>
                </MDBContainer>
                <MDBBtn className="invite-button z-depth-1" social="email"><MDBIcon icon="envelope" className="pr-1" /> Invite </MDBBtn>
            </MDBJumbotron>
        );
    }
}

export default Timeline;