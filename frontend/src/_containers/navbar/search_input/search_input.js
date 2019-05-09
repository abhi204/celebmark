import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navSearchCeleb, searchCeleb } from '_actions/search';
import { API_HOST } from '_consts/api';
import { debounce } from 'lodash';
import { withRouter } from 'react-router-dom';
import './search_input.css';
import {
    MDBListGroup,
    MDBListGroupItem,
} from 'mdbreact';

class SearchInput extends Component {
    constructor(props){
        super(props);
        this.doNavSearch = this.doNavSearch.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.hideList = this.hideList.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.showScreen = this.showScreen.bind(this);
        this.state = { showList: false, clicked: false };
    }

    doNavSearch = debounce( (searchTerm) => {
        this.setState( { showList: true } ) // show the result list on using the search input
        if(searchTerm)
            this.props.navSearchCeleb({ search: searchTerm})
    }, 250)

    doSearch = (searchTerm) => {
        this.setState( { showList: false } ) // show the result list on using the search input
        this.props.searchCeleb({ search: searchTerm})
        if(window.location.pathname !== '/search')
            this.showScreen('/search')
    }

    hideList = () => {
       this.setState({showList: false})
    }

    showScreen = (url) => {
        this.setState({clicked: true})
        this.props.history.push(url)
    }

    renderList = () => {
        let { search } = this.props;
        if(search.searchTerm && search.results.length) // Show list of matches
        {
            return(
                <div>
                    { search.results.slice(0,5).map(celeb => (
                                <div key={celeb.user_name} >
                                    <a
                                      href={`/profile/${celeb.user_name}`}
                                      onMouseDown={ () => this.showScreen(`/profile/${celeb.user_name}`) }
                                    >
                                    <MDBListGroupItem >
                                        <img src={`${API_HOST}/${celeb.profile_pic}`} className="rounded-circle z-depth-0" style={{height: "2.5em", paddingRight: "0.5em"}} alt="" />
                                        {`${celeb.first_name} ${celeb.last_name}`}
                                    </MDBListGroupItem>
                                    </a>
                                </div>))
                    }
                    <a
                     href="/search"
                     onMouseDown={ () => this.showScreen('/search') }
                    >
                        <MDBListGroupItem id="search-more">
                                <span style={{fontSize: "0.95em"}}>Show All Results</span>
                        </MDBListGroupItem>
                    </a>
                </div>
            );
        }
        else if(search.searchTerm && !search.results.length) // No results
        {
            return (
            <MDBListGroupItem className="text-center">
                <span>No Results Found</span>
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

    onInputBlur = () => {
        if(!this.props.clicked){
            this.hideList()
        }
    }

    // componentDidMount = () => {
    //     let listItems = document.querySelector("#search-input").getElementsByTagName("*");
    //     [...listItems].forEach( listItem => { listItem.addEventListener("click", this.hideList) })
    // }

    render(){
        return(
            <div id="search-input">
                <input
                    className="form-control form-control-search float-center"
                    onChange={event => {
                        if(window.location.pathname !== '/search')
                            this.doNavSearch(event.target.value)
                    }}
                    onBlur = {this.onInputBlur}
                    type="text"
                    placeholder="Search Your Queries"
                    aria-label="Search"
                    onKeyUp={event => { 
                        if(event.keyCode===13)
                            this.doSearch(event.target.value)
                    }}
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
    return { search: state.navSearch }
}

const mapDispatchToProps = {
    searchCeleb,
    navSearchCeleb
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchInput));
