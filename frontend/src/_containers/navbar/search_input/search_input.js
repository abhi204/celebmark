import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCeleb } from '_actions/search';
import { userImage } from '_consts/dummy';
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
        this.sendQuery = this.sendQuery.bind(this);
        this.hideList = this.hideList.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.showScreen = this.showScreen.bind(this);
        this.state = { showList: false, clicked: false };
    }

    sendQuery = debounce( (searchTerm) => {
        this.setState( { showList: true } ) // show the result list on using the search input
        if(searchTerm)
            this.props.requestSearch({ search: searchTerm})
    }, 250)

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
                    { search.results.map(celeb => (
                                <div key={celeb.user_name}>
                                    <a 
                                      href={`/${celeb.user_name}`}
                                      onMouseDown={ () => this.showScreen(`/${celeb.user_name}`) }
                                    >
                                    <MDBListGroupItem>
                                        <img src={userImage} className="rounded-circle z-depth-0" style={{height: "2.5em", paddingRight: "0.5em"}} alt="" />
                                        Cras justo odio
                                    </MDBListGroupItem>
                                    </a>
                                </div>))
                    }
                    <a
                     href="/search"
                     onMouseDown={ () => this.showScreen('/search') }
                    >
                        <MDBListGroupItem id="search-more">
                                <span style={{fontSize: "0.75em"}}>Show all Results</span>
                        </MDBListGroupItem>
                    </a>
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
                    className="form-control"
                    onChange={event => this.sendQuery(event.target.value)}
                    onBlur = {this.onInputBlur}
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchInput));