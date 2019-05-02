import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import './subscription_cards.css';
import doSubscribe from '_actions/subscribe';

class SubscriptionCards extends Component {
  constructor(props){
    super(props);
    this.state = {subscribeTo: null}
    this.onSubscribeClick = this.onSubscribeClick.bind(this);
  }

  onSubscribeClick(model) {
    this.props.doSubscribe(model)
    this.setState({subscribeTo: model})
  }

  render(){
    const { user } = this.props;

    return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our Pricing Plans
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          {/* Discription */}
        </p>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol lg="4" md="12" sm="12" className="mb-lg-0 mb-4" hidden={user.loggedIn === true}>
            <MDBCard pricing>
              <MDBCardBody>
                <h5 className="font-weight-bold mt-3">Free</h5>
                <div className="price pt-0">
                  <h2 className="number red-text mb-0">00</h2>
                </div>
                <ul className="striped mb-1">
                  <li>
                    <p>
                      <strong>Default</strong> plan
                    </p>
                  </li>
                  <li>
                    <p>
                      500 /- <strong> Per Invite</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Unlimited </strong> Validity
                    </p>
                  </li>
                  <li>
                    <p>
                      200 /- Non Refundable<strong> Upon Cancellation</strong>
                    </p>
                  </li>
                </ul>
                <Link to='/signup'>
                  <MDBBtn rounded color="danger" className="mb-4">
                    Register
                  </MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md={ user.loggedIn === true ? "6" : "12" } sm="12" className="mb-lg-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
              }}
            >
              <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                <MDBCardBody>
                  <h5 className="font-weight-bold mt-2">Platinum</h5>
                  <div className="price pt-0">
                    <h2 className="number number1 mb-0">4999</h2>
                  </div>
                  <ul className="striped mb-0">
                    <li>
                      <p>
                        12 free invites <strong> per month</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>03 months</strong> validity
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>350 /- per invite</strong> after 12 free
                      </p>
                    </li>
                    <li>
                      <p>
                        150 /- non-refundable <strong> upon cancellation </strong>
                      </p>
                    </li>
                  </ul>
                  <MDBBtn
                    onClick={() => this.onSubscribeClick('platinum')}
                    outline color="white"
                    disabled={this.state.subscribeTo==='platinum'}
                  >
                    Buy now
                  </MDBBtn>
                </MDBCardBody>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md={ user.loggedIn === true ? "6" : "12" } sm="12" className="mb-lg-0 mb-4">
            <MDBCard pricing>
              <MDBCardBody>
                <h5 className="font-weight-bold mt-3">Diamond</h5>
                <div className="price pt-0">
                  <h2 className="number red-text mb-0">9999</h2>
                </div>
                <ul className="striped mb-0">
                    <li>
                      <p>
                        20 free invites <strong> per month</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>12 months</strong> validity
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>200 /- per invite</strong> after 20 free
                      </p>
                    </li>
                    <li>
                      <p>
                        75 /- non-refundable <strong> upon cancellation </strong>
                      </p>
                    </li>
                  </ul>
                <MDBBtn 
                  onClick={() => this.onSubscribeClick('diamond')}
                  rounded color="danger" className="mb-4" 
                  disabled={this.state.subscribeTo === 'diamond'}
                >
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}



let mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = {
  doSubscribe,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubscriptionCards));