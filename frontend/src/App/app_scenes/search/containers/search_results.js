import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchNext, searchCeleb } from '_actions/search';
import CelebCard from '../components/celeb_card';
import { MDBBtn, MDBSpinner, MDBRow } from 'mdbreact';


class SearchResults extends Component {

  componentDidMount(){
    let { search, navSearch } = this.props;
    if( !search.results.length && !navSearch.results.length )
      this.props.searchCeleb()
  }


  render(){
    let { search } = this.props;

    let childElements = search.results.map( celeb => (
      <CelebCard
        key={celeb.user_name}
        name={`${celeb.first_name} ${celeb.last_name}`}
        category={celeb.category}
        user_name={celeb.user_name}
        profile_pic = {celeb.profile_pic}
      />
    ))
    if(search.loading)
      return <center className="mt-5 p-5"><MDBSpinner blue /></center>
    else if(search.count===0)
      return <center className="mt-5 p-5">NO CELEBS FOUND</center>
    else
      return (
        <div>
        <MDBRow className="mt-1 pr-0 pl-0">
          {childElements}
        </MDBRow>
          { search.next ?
            <center className="my-3">
              <MDBBtn 
                onClick={()=>{this.props.searchNext(search.next, search.searchTerm)}} 
                disabled={search.loadingNext}
              >
              SHOW MORE
              </MDBBtn>
            </center>
            :
            <center className="my-3"/>
          }
        </div>
      );
  }
}

let mapStateToProps = (state) => ({
  search: state.search,
  navSearch: state.navSearch
})

const mapDispatchToProps = {
  searchNext,
  searchCeleb
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
