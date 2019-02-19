import React, { Component } from 'react';
import { 
    MDBCarousel, MDBCarouselCaption,
    MDBCarouselInner, MDBCarouselItem,
    MDBView, MDBMask 
} from 'mdbreact';
import { imageFetcher } from './helper/image_fetcher';
import './carousel.css';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {numberOfImages: 3, images: [] }
  }

  async componentDidMount(){
    let images = await imageFetcher(this.state.numberOfImages);
    this.setState({images})
  }

  render(){
    const { numberOfImages, images } = this.state;
    return (
      <div >
        <MDBCarousel activeItem={1} length={numberOfImages} showControls={true} showIndicators={true} className="z-depth-1 d-none d-sm-block">
          <MDBCarouselInner>
            { images.map(image => (
              <MDBCarouselItem itemId={image.id} key={image.id}>
                <MDBView className="carousel-image">
                  <img className="d-block w-100" src={image.url} alt="Second slide" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">This is caption</h3>
                  <p>Second text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              ))}
          </MDBCarouselInner>
        </MDBCarousel>

         {/* Carousel for Mobile Devices */}
         <MDBCarousel activeItem={1} length={numberOfImages} showControls={true} showIndicators={true} className="z-depth-1 d-block d-sm-none">
          <MDBCarouselInner>
            { images.map(image => (
              <MDBCarouselItem itemId={image.id} key={image.id}>
                <MDBView className="carousel-image-sm">
                  <img className="d-block w-100" src={image.url} alt="Second slide" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">This is caption</h3>
                  <p>XYZ</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    );
  }
}