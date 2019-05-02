import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCeleb, clearSearch } from '_actions/search';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import './search_panel.css';

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.searchCeleb = this.searchCeleb.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.applySort = this.applySort.bind(this);
        this.state = { searchTerm: '', city: null, sortBy: null };
    }

    searchCeleb(){
        let { searchTerm, city } = this.state;
        this.props.searchAction({ search: searchTerm, city })
    }

    changeCity(event){
        this.setState({ city: event.target.textContent });
    }

    applySort(event){
        this.setState({ sortBy: event.target.textContent })
    }

    componentWillUnmount(){
        this.props.clearSearch();
    }
    render(){
        return (
            <div className="ml-2 mr-2 row-background">
            <center>
                <div className="search-options p-3 mt-3 border border-info">
                <MDBDropdown className="border-right text-fix">
                    <MDBDropdownToggle caret nav>
                        { this.state.city || 'City' }
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem onClick={this.changeCity}>Bangalore</MDBDropdownItem>
                        <MDBDropdownItem onClick={this.changeCity}>Chennai</MDBDropdownItem>
                        <MDBDropdownItem onClick={this.changeCity}>Cochin</MDBDropdownItem>
                        <MDBDropdownItem onClick={this.changeCity}>Mumbai</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown className="border-right text-fix">
                    <MDBDropdownToggle caret nav>
                    { this.state.sortBy || 'Sort' }
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem onClick={this.applySort}>Name</MDBDropdownItem>
                        <MDBDropdownItem onClick={this.applySort}>Ratings</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <input outline onChange={event => {this.setState({searchTerm: event.target.value})}} onKeyUp={event => { if(event.keyCode === 13) this.searchCeleb() }} placeholder="Search..." className="mr-5 ml-5 celeb-search-input" />
                <img alt="SEARCH" src="https://img.icons8.com/ios/50/000000/search.png" className="pr-4" style={{height: "2.5em"}} onClick={this.searchCeleb} />
                </div>
            </center>
            </div>
        );
    }
}

const mapDispatchToProps = {
    searchAction: searchCeleb,
    clearSearch
}

export default connect(null,mapDispatchToProps)(SearchPanel);
