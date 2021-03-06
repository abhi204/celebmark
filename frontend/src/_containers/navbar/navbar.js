import React, { Component } from 'react';
import { userImage, favIcon } from '_consts/dummy';
import { connect } from 'react-redux'
import SearchInput from './search_input/search_input';
import { Link } from 'react-router-dom';
import { API_HOST } from '_consts/api';

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
        const { details, loggedIn } = this.props.user;
        const { profile_pic,user_name } = details || '';
        return (
              <div >
                <MDBRow>
                    {/* Desktop navigation */}
                      <MDBNavbar color="white" light className="d-none d-sm-flex pt-0 pb-0" scrolling fixed="top">

                        <MDBCol>
                          <MDBNavItem fluid='true' className="d-inline my-auto">
                            <MDBNavbarBrand><a className="black-text" href="/"><img style={{height: "2em"}} src={favIcon} alt="" />&nbsp;CelebMark</a></MDBNavbarBrand>
                          </MDBNavItem>
                        
                        </MDBCol>
                        <MDBCol>
                            <MDBNavItem className="d-inline float-center my-auto" >
                                    <SearchInput/>
                            </MDBNavItem>
                            </MDBCol>
                        
                        <MDBCol className="d-inline-flex justify-content-end">
                        {( loggedIn === true &&
                        //loggedin desktop navigation
                            <MDBNavbarNav right className="d-inline-flex flex-row">
                                <MDBNavItem className="mr-3 ml-3 float-right my-auto">
                                <MDBDropdown size="lg">
                                    <MDBDropdownToggle className="no-wrap" nav caret>
                                        <img src={`${API_HOST}/${profile_pic}`} className="rounded-circle z-depth-0"
                                            style={{height: "2.5em", padding: 0}} alt="" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic >
                                        <Link to="/dashboard/details" className="p-0" >
                                        <MDBDropdownItem><MDBIcon icon="user-circle" /> &nbsp; Dashboard</MDBDropdownItem>
                                        </Link>
                                        <Link to="/dashboard/invites" className="p-0" >
                                        <MDBDropdownItem><MDBIcon fas icon="envelope-open-text" />
                                             &nbsp; Invites
                                        </MDBDropdownItem>
                                        </Link>
                                        <Link to="/dashboard/bookmarks" className="p-0" >
                                            <MDBDropdownItem><MDBIcon fas icon="bookmark" /> &nbsp; Bookmarks</MDBDropdownItem>
                                        </Link>
                                        <MDBDropdownItem divider />
                                        <Link to="/logout" className="p-0" >
                                            <MDBDropdownItem><MDBIcon icon="power-off" />&nbsp; Logout</MDBDropdownItem>
                                        </Link>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem className="mr-3 float-right my-auto no-wrap" >
                                    Hi, {user_name}
                                </MDBNavItem>
                                <MDBNavItem className=" float-right my-auto">
                                    <MDBNavLink to="/"><MDBIcon className="black-text" size="lg" far icon="envelope-open"/></MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav> )
                            ||
                            // loggedout desktop navigation
                            <MDBNavbarNav right className="d-inline-flex flex-row">
                                <MDBNavItem className="float-right my-auto mr-3">
                                <MDBNavLink to="/signup"><MDBIcon className="black-text" size="lg" icon="user-shield"/>&nbsp;Signup</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem className="float-right my-auto">
                                <MDBNavLink to="/login"><MDBIcon className="black-text" size="lg" icon="lock"/>&nbsp;Login</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                                }
                        </MDBCol>

                      </MDBNavbar>
                </MDBRow>

                {/* Navabar for Mobile Devices */}
                <MDBNavbar style={this.state.color} className="d-flex d-sm-none p-0 z-depth-1" fixed="top">
                  {( loggedIn === true &&
                  // loggedin mobile navigation
                  <MDBNavbarNav className="d-inline-flex flex-row flex-fill">
                    <MDBNavItem className="my-auto" >
                        <MDBNavbarBrand >
                            <a href="/"><img src={favIcon} style={{height: "1.8em", padding: 0}} alt=""/></a>
                        </MDBNavbarBrand>
                    </MDBNavItem >
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/search">
                            <MDBIcon icon="search" className="black-text" size="lg"/>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                            <MDBIcon icon="layer-group" className="black-text" size="lg"/>
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem  className="my-auto">
                        <MDBNavLink to="/">
                          <img src={userImage} className="rounded-circle z-depth-0"
                                style={{height: "2em", padding: 0}} alt="" />
                        </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav> )
                  ||
                  //logged out mobile navigation
                  <MDBNavbarNav className="mr-3 ml-3 d-inline-flex flex-row " color="red">
                    <MDBNavItem className="my-auto mr-auto" >
                        <MDBNavbarBrand >
                            <img src={favIcon} style={{height: "2em", padding: 0}} alt=""/>
                        </MDBNavbarBrand>
                    </MDBNavItem >
                    <MDBNavItem className="my-auto ml-auto" >
                        <MDBIcon icon="question" />
                    </MDBNavItem >
                  </MDBNavbarNav> }
                </MDBNavbar>
              </div>)
    }
}

function mapStateToProps(state) {
    return { 
        user: state.user
    }
}

export default connect(mapStateToProps,)(NavBar);
