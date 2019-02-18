import React, { Component } from 'react';
import { userImage, favIcon, smallIcon } from '../_consts/dummy';
import { connect } from 'react-redux'
import { MDBFormInline, MDBNavbar, MDBNavbarBrand,
MDBNavbarNav, MDBNavItem,
MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavLink, MDBIcon } from 'mdbreact';

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
        const { name } = this.props.user
        return ( 
                <div >
                <MDBNavbar style={this.state.color} className="d-none d-sm-flex pt-1" scrolling fixed="top">
                    
                    <MDBNavbarNav left className="d-inline-flex flex-row ">
                    <MDBNavItem >
                    <MDBNavbarBrand className="ml-3" >
                        <img src={favIcon} style={{height: "2em", padding: 0}}/>
                    </MDBNavbarBrand></MDBNavItem>
                        <MDBNavItem >
                          <MDBFormInline waves>
                            <div className="md-form my-0">
                              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                          </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                      
                    <MDBNavbarNav right className="d-inline-flex flex-row ">
                        <MDBNavItem className="mr-3 " >
                            <MDBNavbarBrand className="mr-2">Hi, {name}</MDBNavbarBrand>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/"><MDBIcon className="black-text" size="lg" icon="envelope"></MDBIcon></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem className="mr-3 ml-3">
                        <MDBDropdown size="lg">
                            <MDBDropdownToggle nav caret>
                            <img src={userImage} className="rounded-circle z-depth-0" 
                                style={{height: "2em", padding: 0}} />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic >
                                <MDBDropdownItem>Action</MDBDropdownItem>
                                <MDBDropdownItem>Another Action</MDBDropdownItem>
                                <MDBDropdownItem>Something else here</MDBDropdownItem>
                                <MDBDropdownItem divider />
                                <MDBDropdownItem>Separated link</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBNavbar>

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