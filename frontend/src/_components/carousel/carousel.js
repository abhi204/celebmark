import React, { Component } from 'react';
import { 
    MDBCarousel, MDBCarouselCaption,
    MDBCarouselInner, MDBCarouselItem,
    MDBView, MDBMask, MDBSpinner 
} from 'mdbreact';
import { imageFetcher } from './helper/image_fetcher';
import './carousel.css';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {numberOfImages: 3, images: [], loading: true }
  }

  async componentDidMount(){
    let images = await imageFetcher(this.state.numberOfImages);
    this.setState({images, loading: false})
  }

  render(){
    const { numberOfImages, images, loading } = this.state;
    if(loading){
      return (
        <div 
          className="carousel-image carousel-loading
          d-flex flex-column justify-content-center align-content-center"
        >
          <center><MDBSpinner red/></center>
      </div>
      )
    }
    return (
      <div >
        <MDBCarousel activeItem={1} length={numberOfImages} showControls={false} 
          showIndicators={false} className="z-depth-1 carousel-image"
        >
          <MDBCarouselInner>
            { images.map(image => (
              <MDBCarouselItem itemId={image.id} key={image.id}>
                <MDBView className="carousel-image">
                  <img className="d-block w-100" src={image.url} alt="Second slide" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Get people For your event</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    );
  }
}