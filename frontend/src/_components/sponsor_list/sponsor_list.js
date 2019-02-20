import React, { Component } from "react";
import Slider from "react-slick";
import sponsorFetcher from "./helper/sponsor_fetcher";

export default class SponsorSlider extends Component {
  constructor(props){
    super(props);
    this.state = { sponsors: []}
  }

  async componentDidMount(){
    let sponsors = await sponsorFetcher();
    this.setState({ sponsors });
  }

  render() {
    const settings = {
      accessibility: false,
      adaptiveHeight: true,
      centerPadding: "50px",
      dots: false,
      infinite: true,
      speed: 750,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.sponsors.map( sponsor => (
            <img src={sponsor.url} key={sponsor.id} alt={sponsor.name} />
          ))}
        </Slider>
      </div>
    );
  }
}