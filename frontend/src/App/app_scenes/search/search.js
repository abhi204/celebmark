import React, { Component } from 'react';
import { MDBSticky, MDBStickyContent, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from 'mdbreact';
import FilterSection from './containers/filter_section/filter_section';
import ResultSection from './containers/result_section/result_section';

class Search extends Component {

    render(){
        return (
            <div><center>
            <MDBRow className="mt-4 p-3" />
                <MDBRow className="ml-3 mr-3">
                    <MDBCol>
                        <div style={{position: "fixed"}}>
                        <h3><strong>Search Results</strong></h3>
                        <hr/> 
                        <FilterSection/>
                        </div>
                    </MDBCol>
                    <MDBCol size="8">
                        <ResultSection />
                        <ResultSection />
                        <ResultSection />
                        <ResultSection />
                        <ResultSection />
                    </MDBCol>
                </MDBRow>
            </center></div>
        );
    }
}

export default Search;