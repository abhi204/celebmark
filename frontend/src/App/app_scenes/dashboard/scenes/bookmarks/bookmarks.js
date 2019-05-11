import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {MDBIcon, MDBRow} from "mdbreact";
import '../../../search/components/celeb_card.css';
import './bookmark.css';
import { getCelebBookmark } from '_actions/bookmark'
import _ from 'lodash';
import BookmarkCard from './components/bookmark_card';

class BookmarksSection extends Component {

    componentDidMount(){
        this.props.getCelebBookmark();
    }

    render() {
        const { celebs } = this.props;
        const celeb_list = _.values(celebs)
        if(celebs.loading)
            return <center className="mt-5" style={{backgroundColor: "red"}}>Loading</center>
        if(celeb_list.length === 0)
            return <center className="mt-5" style={{backgroundColor: "red"}}>NO BOOKMARKS</center>
        return (
            <div>
                <h4 className="h4-responsive text-center mt-5 black-text" color=" teal darken-1">
                    <MDBIcon icon="bookmark" size="md" className="pink-text mr-2"/>
                    <strong>Bookmarks</strong>
                </h4>
                <div className="big-screen-margin-bookmark">
                <MDBRow className="mt-1 mr-2">
                    {
                        celeb_list.map( celeb => <BookmarkCard key={celeb.user_name} celeb={celeb}/> )
                    }
                </MDBRow>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    celebs: state.bookmark.celebs
})

let mapDispatchToProps = {
    getCelebBookmark
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookmarksSection));