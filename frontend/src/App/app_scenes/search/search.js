import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import FilterSection from './containers/filter_section/filter_section';
import SearchResults from './containers/search_results/search_results'
import TagsSection from './containers/filter_section/tags_section';
import SortSection from './containers/filter_section/sort_section';
import './search.css';

class SearchPage extends Component {

    render(){
        return (
            <MDBContainer className="mt-3 m-3" fluid>
            <MDBRow className="mt-3">
                <MDBCol className="col-3"/>
                <MDBCol className="fixed col-3 bg-white">
                    <div className="m-lg-4 pl-lg-2 pr-lg-2">
                    <FilterSection/>
                    <hr/>
                    <SortSection/>
                    <hr/>
                    <TagsSection/>
                    </div>
                </MDBCol>
                <SearchResults/>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default SearchPage;
