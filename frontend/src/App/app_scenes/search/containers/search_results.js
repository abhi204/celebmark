import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchNext } from '_actions/search';
import CelebCard from '../components/celeb_card';
import { MDBBtn } from 'mdbreact';

// class SearchResults extends Component {

//   render(){
//     return (
//       <MDBRow className="mt-1 masonry-with-columns-2">
//         { this.props.celebs.map( celeb => (
//           <CelebCard 
//             name={`${celeb.first_name} ${celeb.last_name}`}
//             rating={0}
//             category={celeb.category}
//             user_name={celeb.user_name}
//             profile_pic = {celeb.profile_pic}
//           />
//         ))}
//       </MDBRow>
//     );
//   }
// }


class SearchResults extends Component {



  render(){
    let { search } = this.props;
    let childElements = search.results.map( celeb => (
      <CelebCard
        key={celeb.user_name}
        name={`${celeb.first_name} ${celeb.last_name}`}
        rating={0}
        category={celeb.category}
        user_name={celeb.user_name}
        profile_pic = {celeb.profile_pic}
      />
    ))
    if(search.loading)
      return <div>LOADING...</div>
    else if(search.count===0)
      return <div>No results Found</div>
    else
      return (
        <div className="mt-1 pr-0 pl-0">
          {childElements}
          { search.next && <center><MDBBtn onClick={()=>{this.props.searchNext(search.next)}} disabled={search.loadingNext}>SHOW MORE</MDBBtn></center>}
        </div>
      );
  }
}

function mapStateToProps(state){
  return { search: state.search }
}

const mapDispatchToProps = {
  searchNext
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
