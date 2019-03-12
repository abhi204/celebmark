import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCeleb } from '_actions/search';
import { userImage } from '_consts/dummy';
import { debounce } from 'lodash';
import './search_input.css';
import {
    MDBListGroup,
    MDBListGroupItem,
} from 'mdbreact';
import { Link } from 'react-router-dom';

class SearchInput extends Component {
    constructor(props){
        super(props);
        this.sendQuery = this.sendQuery.bind(this);
        this.hideList = this.hideList.bind(this);
        this.state = { showList: false , input: '' };
    }

    sendQuery = debounce( (searchTerm) => {
        this.setState( { showList: true } ) // show the result list on using the search input
        if(searchTerm)
            this.props.requestSearch({ search: searchTerm})
    }, 250)

    hideList = () => {
       this.setState({showList: false})
    }

    renderList = () => {
        let { search } = this.props;
        if(search.searchTerm && search.results.length) // Show list of matches
        {
            return(
                <div>
                    { search.results.map(celeb => (
                                <div key={celeb.user_name}>
                                    <Link to={`/${celeb.user_name}`}>
                                    <MDBListGroupItem>
                                        <img src={userImage} className="rounded-circle z-depth-0" style={{height: "2.5em", paddingRight: "0.5em"}} alt="" />
                                        Cras justo odio
                                    </MDBListGroupItem>
                                    </Link>
                                </div>))
                    }
                    <Link to="/search" >
                        <MDBListGroupItem id="search-more">
                                <span style={{fontSize: "0.75em"}}>Show all Results</span>
                        </MDBListGroupItem>
                    </Link>
                </div>
            );
        }
        else if(search.searchTerm && !search.results.length) // No results
        {
            return (
            <MDBListGroupItem>
                <center><span>No Results Found</span></center>
            </MDBListGroupItem>
            );
        }
        else // Searching.....
        {
            return (
            <MDBListGroupItem>
                <center><div className="spinner-grow text-primary" role="status"><span className="sr-only">Loading...</span></div></center>
            </MDBListGroupItem>
            );
        }
    }

    componentDidMount = () => {
        let listItems = document.querySelector("#search-input").getElementsByTagName("*");
        [...listItems].forEach( listItem => { listItem.addEventListener("click", this.hideList) })
    }
    render(){
        return(
            <div id="search-input">
                <input 
                    className="form-control"
                    onChange={event => this.sendQuery(event.target.value)}
                    onBlur = {this.hideList}
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="pos-absolute-correction search-dropdown" hidden={!this.state.showList}>
                    <MDBListGroup>
                        { this.renderList() }
                    </MDBListGroup>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { search: state.search }
}

const mapDispatchToProps = {
    requestSearch: searchCeleb,
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchInput);