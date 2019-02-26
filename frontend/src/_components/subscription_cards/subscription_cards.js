import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import './subscription_cards.css';

const SubscriptionCards = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our pricing plans
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        {/* Discription */}
      </p>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <MDBCardBody>
              <h5 className="font-weight-bold mt-3">Individual</h5>
              <div className="price pt-0">
                <h2 className="number red-text mb-0">1k</h2>
              </div>
              <ul className="striped mb-1">
                <li>
                  <p>
                    <strong>5</strong> invites
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Free</strong> access to CelebMark events
                  </p>
                </li>
                <li>
                  <p>
                    <strong>1</strong> year subscription
                  </p>
                </li>
                <li>
                  <p>
                    CelebMark <strong>Support</strong>
                  </p>
                </li>
              </ul>
              <MDBBtn rounded color="danger" className="mb-4">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")'
            }}
          >
            <div className="text-white text-center pricing-card d-flex align-items-center rgba-indigo-strong py-3 px-3 rounded">
              <MDBCardBody>
                <h5 className="font-weight-bold mt-2">Group</h5>
                <div className="price pt-0">
                  <h2 className="number mb-0">5k</h2>
                </div>
                <ul className="striped mb-0">
                  <li>
                    <p>
                      <strong>Unlimited</strong> invites
                    </p>
                  </li>
                  <li>
                    <p>
                      a chance to get <strong>Sponsorships</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Prioritised</strong> Support
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Free</strong> Advertisements
                    </p>
                  </li>
                </ul>
                <MDBBtn outline color="white">
                  Buy now
                </MDBBtn>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <MDBCardBody>
              <h5 className="font-weight-bold mt-3">Exclusive</h5>
              <div className="price pt-0">
                <h2 className="number red-text mb-0">15k</h2>
              </div>
              <ul className="striped mb-0">
                  <li>
                    <p>
                      <strong>Unlimited</strong> invites
                    </p>
                  </li>
                  <li>
                    <p>
                      a chance to get <strong>Sponsorships</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Prioritised</strong> Support
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Free</strong> Advertisements
                    </p>
                  </li>
                </ul>
              <MDBBtn rounded color="danger" className="mb-4">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default SubscriptionCards;