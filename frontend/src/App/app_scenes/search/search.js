import React, { Component } from 'react';
import SearchResults from './containers/search_results';
import SearchPanel from './containers/search_panel';
import './search.css';

class SearchPage extends Component {
    render(){
        return (
            <div className="">
                <SearchPanel />
                <div className="container-fluid">
                <SearchResults/>
                </div>
            </div>
        );
    }
}

export default SearchPage;
