import React, { Component } from 'react';
import { userImage, favIcon, smallIcon } from '../_consts/dummy';
import { connect } from 'react-redux'
import { MDBFormInline, MDBNavbar, MDBNavbarBrand,
MDBNavbarNav, MDBNavItem,
MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavLink, MDBIcon, MDBCol,MDBRow } from 'mdbreact';

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
                      <MDBNavbar color="white" light className="d-none d-sm-flex pt-1" scrolling fixed="top">
                        <MDBCol size="1"></MDBCol>

                        <MDBCol size="1">
                          <MDBNavItem fluid className="d-inline  my-auto">
                            <img src={favIcon}  height="50" alt="" />
                          </MDBNavItem>
                        </MDBCol>

                        <MDBCol size="1"></MDBCol>

                        <MDBCol size="4">
                          <MDBNavItem className="d-inline float-center my-auto">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                          </MDBNavItem>
                        </MDBCol>

                        <MDBCol size="3">
                          <MDBNavbarNav right className="d-inline-flex flex-row">
                            <MDBNavItem className="mr-3 float-right my-auto" >
                                <MDBNavbarBrand className="mr-2">Hi, {user_name}</MDBNavbarBrand>
                            </MDBNavItem>

                            <MDBNavItem className=" float-right my-auto">
                                <MDBNavLink to="/"><MDBIcon className="black-text" size="lg" far icon="envelope-open">&nbsp;&nbsp;</MDBIcon></MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem className="mr-3 ml-3 float-right my-auto">
                              <MDBDropdown size="lg">
                                <MDBDropdownToggle nav caret>
                                  <img src={userImage} className="rounded-circle z-depth-0"
                                    style={{height: "2.5em", padding: 0}} />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic >
                                    <MDBDropdownItem><MDBIcon icon="user-circle" /> &nbsp; My Profile</MDBDropdownItem>
                                    <MDBDropdownItem><MDBIcon far icon="calendar-check" /> &nbsp; My Subscription</MDBDropdownItem>
                                    <MDBDropdownItem><MDBIcon far icon="credit-card" /> &nbsp; My Plans</MDBDropdownItem>
                                    <MDBDropdownItem divider />
                                    <MDBDropdownItem><MDBIcon icon="power-off" />&nbsp; Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                              </MDBDropdown>
                            </MDBNavItem>
                          </MDBNavbarNav>
                        </MDBCol>

                        <MDBCol size="1"></MDBCol>
                      </MDBNavbar>
                </MDBRow>

                {/* Navabar for Mobile Devices */}
                <MDBNavbar style={this.state.color} className="d-flex d-sm-none p-0 z-depth-5" fixed="top">
                <MDBNavbarNav className="d-inline-flex flex-row flex-fill">
                    <MDBNavItem className="my-auto" >
                        <MDBNavbarBrand >
                            <img src={smallIcon} style={{height: "2em", padding: 0}}/>
                        </MDBNavbarBrand>
                    </MDBNavItem >
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                            <MDBIcon icon="search" className="green-text" size="2x"/>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                            <MDBIcon icon="envelope" className="green-text" size="2x"/>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                        <img src={userImage} className="rounded-circle z-depth-0"
                                style={{height: "3em", padding: 0}} />
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
