import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBNav } from 'mdbreact';
import FilterSectionLocation from './containers/filter_section/filter_section_location';
import FilterSectionBudget from './containers/filter_section/filter_section_budget';
import SearchResults from './containers/search_results/search_results'
import SortSectionStars from './containers/filter_section/sort_section_stars';
import './search.css';

class SearchPage extends Component {

    render(){
        return (
            <MDBContainer className="mt-2 m-3" fluid>

                <MDBRow className=" ml-2 mr-2 row-background"  >
                    <MDBCol size="3">
                      <MDBInput label="Advance Search" outline icon="search" className="w-10 mt-1 active" />
                    </MDBCol>
                    <MDBCol size="3" color="white">
                      <FilterSectionLocation/>
                    </MDBCol>
                    <MDBCol size="3">
                      <FilterSectionBudget/>
                    </MDBCol>
                    <MDBCol size="3">
                      <SortSectionStars/>
                    </MDBCol>
                </MDBRow>
                <div className="celeb-list">
                sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>sadjbsdkj<br/>
                </div>


            </MDBContainer>
        );
    }
}

export default SearchPage;
