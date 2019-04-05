import React, { Component } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './profile_content.css';

class TabsPage extends Component {
state = {
  activeItemClassicTabs1: "1",
}

toggleClassicTabs1 = tab => () => {
  if (this.state.activeItemClassicTabs1 !== tab) {
  this.setState({
    activeItemClassicTabs1: tab
  });
  }
}

render() {
  return (
      <div className="profile-container">
        <div className="classic-tabs">
          <MDBNav className="profile-nav-tabs" classicTabs>
            <MDBNavItem>
              <MDBNavLink to="#" className={this.state.activeItemClassicTabs1==="1" ? "active" : "" } onClick={this.toggleClassicTabs1("1")}>
                <span style={{ fontSize: "large", fontWeight:"bold" }}>About</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={this.state.activeItemClassicTabs1==="2" ? "active" : "" } onClick={this.toggleClassicTabs1("2")}>
              <span style={{ fontSize: "large", fontWeight:"bold" }}>Clicks</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={this.state.activeItemClassicTabs1==="3" ? "active" : "" } onClick={this.toggleClassicTabs1("3")}>
              <span style={{ fontSize: "large", fontWeight:"bold" }}>Events</span>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent style={{ backgroundColor: "white", minHeight: "100vh"}} activeItem={this.state.activeItemClassicTabs1}>
            <MDBTabPane tabId="1">
              Discription
            </MDBTabPane>
            <MDBTabPane tabId="2">
              PICS + VIDS
            </MDBTabPane>
            <MDBTabPane tabId="3">
              EVENTS
            </MDBTabPane>
          </MDBTabContent>
        </div>
      </div>
    );
  }
}

export default TabsPage;