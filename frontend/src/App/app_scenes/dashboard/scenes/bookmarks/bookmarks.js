import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {MDBCol, MDBIcon, MDBRow} from "mdbreact";
import '../../../search/components/celeb_card.css'

class BookmarksSection extends Component {

    render() {
        return (
            <div>
                <h4 className="h4-responsive text-center black-text" color=" teal darken-1">
                    <MDBIcon icon="bookmark" size="md" className="pink-text mr-2"/>
                    <strong>Bookmarks</strong>
                </h4>
                <MDBRow className="mt-1 mr-2 ml-2">
                    <MDBCol sm="6" md="4">
                        <Link to="">
                            <div className="cards mt-3 text-right float-left ">
                                <div className="card-left p-0">
                                    <img className="h-100 m-0" src="" alt=""/>
                                </div>
                                <div className="card-right">
                                    <h4 className="font-weight-bold mb-0 black-text card-title">Sahil Kumar</h4>
                                    <div className="font-weight-light pb-0 card-meta grey-text">
                                        <span>Painter</span>
                                    </div>
                                </div>
                                <div className="pr-3 ml-auto d-flex flex-column justify-content-center">
                                    <MDBIcon className="red-text" icon="chevron-right"/>
                                </div>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default withRouter(BookmarksSection);