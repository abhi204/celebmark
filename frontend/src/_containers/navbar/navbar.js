import React, { Component } from 'react';
import { userImage, favIcon, smallIcon } from '../../_consts/dummy';
import { connect } from 'react-redux'
import "./navbar.css"

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBDropdown, MDBDropdownItem,
MDBDropdownMenu, MDBDropdownToggle, MDBNavLink,
MDBIcon, MDBCol,MDBRow
} from 'mdbreact';

class NavBar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {collapseID: "", color: {backgroundColor: "white"} };
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    render(){
        const { user_name } = this.props.user
        return (
              <div >
                <MDBRow>
                      <MDBNavbar color="white" light className="d-none d-sm-flex pt-0 pb-0" scrolling fixed="top">

                        <MDBCol>
                          <MDBNavItem fluid='true' className="d-inline my-auto">
                            <MDBNavbarBrand><img style={{height: "2em"}} src={favIcon} alt="" /> &nbsp; CelebMark</MDBNavbarBrand>
                          </MDBNavItem>
                        </MDBCol>

                        <MDBCol>
                          <MDBNavItem className="d-inline float-center my-auto">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                          </MDBNavItem>
                        </MDBCol>

                        <MDBCol className="d-inline-flex justify-content-end">
                          <MDBNavbarNav right className="d-inline-flex flex-row">
                            <MDBNavItem className="mr-3 float-right my-auto no-wrap" >
                                Hi, {user_name}
                            </MDBNavItem>

                            <MDBNavItem className=" float-right my-auto">
                                <MDBNavLink to="/"><MDBIcon className="black-text" size="lg" far icon="envelope-open"/></MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem className="mr-3 ml-3 float-right my-auto">
                              <MDBDropdown size="lg">
                                <MDBDropdownToggle className="no-wrap" nav caret>
                                  <img src={userImage} className="rounded-circle z-depth-0"
                                    style={{height: "2.5em", padding: 0}} />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic >
                                    <MDBDropdownItem><MDBIcon icon="user-circle" /> &nbsp; My Profile</MDBDropdownItem>
                                    <MDBDropdownItem><MDBIcon far icon="calendar-check" /> &nbsp; My Subscription</MDBDropdownItem>
                                    <MDBDropdownItem><MDBIcon far icon="credit-card" /> &nbsp; My Plans</MDBDropdownItem>
                                    <MDBDropdownItem divider />
                                    <MDBNavLink to="/logout"><MDBIcon icon="power-off" />&nbsp; Logout</MDBNavLink>
                                </MDBDropdownMenu>
                              </MDBDropdown>
                            </MDBNavItem>
                          </MDBNavbarNav>
                        </MDBCol>

                      </MDBNavbar>
                </MDBRow>

                {/* Navabar for Mobile Devices */}
                <MDBNavbar style={this.state.color} className="d-flex d-sm-none p-0 z-depth-1" fixed="top">
                  <MDBNavbarNav className="d-inline-flex flex-row flex-fill">
                    <MDBNavItem className="my-auto" >
                        <MDBNavbarBrand >
                            <img src={favIcon} style={{height: "2em", padding: 0}}/>
                        </MDBNavbarBrand>
                    </MDBNavItem >
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                            <MDBIcon fab icon="superpowers" className="black-text" size="2x"/>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                            <MDBIcon far icon="envelope-open" className="black-text" size="2x"/>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                          <img src={userImage} className="rounded-circle z-depth-0"
                                style={{height: "2.4em", padding: 0}} />
                        </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBNavbar>
                
              </div>)
    }
}

function mapStateToProps(state) {
    return { user: state.user.details }
}

export default connect(mapStateToProps,)(NavBar);
