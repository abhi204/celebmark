import React, { Component } from 'react';
import { MDBSticky, MDBStickyContent, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from 'mdbreact';
import FilterSection from './containers/filter_section/filter_section';
import ResultSection from './containers/result_section/result_section';
import TagsSection from './containers/filter_section/tags_section';
import SortSection from './containers/filter_section/sort_section';

class Search extends Component {

    render(){
        return (
            <MDBContainer fluid>
            <MDBRow className="mt-3 p-3"/>
            <MDBRow className="mt-3 ml-5">
                <MDBCol size="3" className="ml-5 ">
                    <div >
                    <FilterSection/>
                    <SortSection/>
                    <TagsSection/>
                    </div>
                </MDBCol>
                <MDBCol size="8"  className="ml-1 mt-1">
                    <ResultSection />
                    <ResultSection />
                    <ResultSection />
                    <ResultSection />
                    <ResultSection />
                    <ResultSection />
                    <ResultSection />
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default Search;
