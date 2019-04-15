import React, { Component } from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import { connect } from 'react-redux';
import _ from 'lodash';
import GalleryLightbox from "../../components/lightbox";

class GalleryPagination extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { page: 1 }
    }

    handleClick(page){
        if( page>0 && page <= Math.ceil(this.props.gallery.length/6) )
        this.setState({ page })
    }

    render()
    {
        const { gallery } = this.props;
        const { page } = this.state;
        const pages = _.chunk(gallery, 6);
        return (
            <div>
                {
                    ( gallery.length && <GalleryLightbox images={pages[page-1]} /> ) 
                    || <div>NO IMAGES</div>
                }
                { pages.length > 1 && 
                    <MDBRow className="w-75 pt-3">
                        <MDBCol>
                        <MDBPagination color="dark">
                            <div onClick={() => this.handleClick(page-1)} >
                                <MDBPageItem disabled={page===1}>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                                </MDBPageItem>
                            </div>
                            {  
                                pages.map(thisPage => (
                                <div onClick={()=> this.handleClick(_.indexOf(pages, thisPage)+1)} key={ _.indexOf(pages, thisPage) + 1}>
                                <MDBPageItem active={page-1===_.indexOf(pages, thisPage)}>
                                <MDBPageNav>
                                    { _.indexOf(pages, thisPage) + 1 } <span className="sr-only">(current)</span>
                                </MDBPageNav>
                                </MDBPageItem>
                                </div>
                                ))
                            }
                            <div onClick={() => this.handleClick(page+1)} >
                                <MDBPageItem disabled={page===(pages.length)}>
                                <MDBPageNav>
                                    &raquo;
                                </MDBPageNav>
                                </MDBPageItem>
                            </div>
                        </MDBPagination>
                        </MDBCol>
                    </MDBRow>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    { gallery: state.profile.gallery }
)

export default connect(mapStateToProps)(GalleryPagination);