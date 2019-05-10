import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';

export default class HandlesList extends Component {
    render(){
        const { handles } = this.props;
        return (
            <div className="social-links">
                <a href={handles.youtube || '#'} target="_blank" className="yt-ic mr-3" hidden={!handles.youtube}>
                    <MDBIcon fab icon="youtube" size="2x"/>
                </a>
                <a href={handles.facebook || '#'} target="_blank" className="fb-ic mr-3" hidden={!handles.facebook}>
                    <MDBIcon fab icon="facebook-f" size="2x"/>
                </a>
                <a href={handles.twitter || '#'} target="_blank" className="tw-ic mr-3" hidden={!handles.twitter}>
                    <MDBIcon fab icon="twitter" size="2x"/>
                </a>
                <a href={handles.instagram || '#'} target="_blank" className="ins-ic mr-3" hidden={!handles.instagram}>
                    <MDBIcon fab icon="instagram" size="2x"/>
                </a>
                <a href={handles.website || '#'} target="_blank" className="so-ic mr-3" hidden={!handles.website}>
                    <MDBIcon icon="link" size="2x"/>
                </a>
            </div>
        );
    }
}
