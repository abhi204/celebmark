import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';

export default class HandlesList extends Component {
    render(){
        const { handles } = this.props;
        return (
            <div className="social-links">
                <a href="#!" className="yt-ic mr-3" hidden={!handles.youtube}>
                    <MDBIcon fab icon="youtube" size="2x"/>
                </a>
                <a href="#!" className="fb-ic mr-3" hidden={!handles.facebook}>
                    <MDBIcon fab icon="facebook-f" size="2x"/>
                </a>
                <a href="#!" className="tw-ic mr-3" hidden={!handles.twitter}>
                    <MDBIcon fab icon="twitter" size="2x"/>
                </a>
                <a href="#!" className="ins-ic mr-3" hidden={!handles.instagram}>
                    <MDBIcon fab icon="instagram" size="2x"/>
                </a>
                <a href="#!" className="so-ic mr-3" hidden={!handles.website}>
                    <MDBIcon icon="link" size="2x"/>
                </a>
            </div>
        );
    }
}
