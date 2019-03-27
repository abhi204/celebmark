import React, { Component } from 'react';
import { MDBCol } from 'mdbreact';
import CelebCard from '../components/celeb_card';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

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
    let childElements = this.props.celebs.map( celeb => (
      <CelebCard
        key={celeb.user_name}
        name={`${celeb.first_name} ${celeb.last_name}`}
        rating={0}
        category={celeb.category}
        user_name={celeb.user_name}
        profile_pic = {celeb.profile_pic}
      />
    ))

    return (
      <MDBCol className="mt-1 pr-0 pl-0">
      <div>
        <Masonry
        // elementType={'ul'} // default 'div'
        options={{transitionDuration: 0}} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
        {childElements}
        </Masonry>
      </div>
      </MDBCol>
    );
  }
}

function mapStateToProps(state){
  return {celebs: state.search.results}
}

export default connect(mapStateToProps)(SearchResults);
