import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import './search_panel.css';
import { Button } from 'semantic-ui-react';

class SearchPanel extends Component{

    render(){
        return (
            <div className="ml-2 mr-2 row-background">
            <center>
                <div className="search-options p-3">
                <MDBDropdown className="border-right text-fix">
                    <MDBDropdownToggle caret nav>
                        City
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem>Bangalore</MDBDropdownItem>
                        <MDBDropdownItem>Chennai</MDBDropdownItem>
                        <MDBDropdownItem>Cochin</MDBDropdownItem>
                        <MDBDropdownItem>Mumbai</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown className="mr-5 border-right text-fix">
                    <MDBDropdownToggle caret nav>
                        Sort By
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem>Name</MDBDropdownItem>
                        <MDBDropdownItem>Ratings</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <input placeholder="Search..." className="mr-2 celeb-search-input" />
                <span><img src="https://img.icons8.com/ios/50/000000/search.png" style={{height: "2.5em"}}/></span>
                </div>
            </center>
            </div>
        );
    }
}

export default SearchPanel;
