import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchNext } from '_actions/search';
import CelebCard from '../components/celeb_card';
import { MDBBtn, MDBSpinner, MDBRow } from 'mdbreact';


class SearchResults extends Component {


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
          { search.next && <center className="mt-3"><MDBBtn onClick={()=>{this.props.searchNext(search.next)}} disabled={search.loadingNext}>SHOW MORE</MDBBtn></center>}
        </div>
      );
  }
}

let mapStateToProps = (state) => ({
  search: state.search,
  navSearch: state.navSearch
})

const mapDispatchToProps = {
  searchNext
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
