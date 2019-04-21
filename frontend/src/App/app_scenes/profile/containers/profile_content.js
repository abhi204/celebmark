import React, {Component} from "react";
import {connect} from 'react-redux';
import AboutTab from './about'
import GalleryTab from './gallery/gallery'
import './profile_content.css';
import doProfileBookmark from '../actions/bookmark';
import {
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBBtn,
    MDBNavbarNav,
    MDBIcon,
    MDBContainer,
    MDBRow,
    MDBCOL,
} from "mdbreact";


class TabsPage extends Component {
    state = {
        activeItemClassicTabs1: "1",
        bookmark: false
    }

    toggleClassicTabs1 = tab => () => {
        if (this.state.activeItemClassicTabs1 !== tab) {
            this.setState({
                activeItemClassicTabs1: tab
            });
        }
    }

    componentDidMount(){
        let { profile, user } = this.props;
        let bookmarks = user.loggedIn === true && user.details.bookmarks.celebs ? user.details.bookmarks.celebs : [] ; 
        if(bookmarks.includes(profile.user_name))
            this.setState({ bookmark: true })
    }

    render() {
        const { profile, user } = this.props;
        let bookmarks = user.loggedIn === true && user.details.bookmarks.celebs ? user.details.bookmarks.celebs : []; 
        return (
            <MDBContainer>
                <div className="classic-tabs">
                    <MDBNav className="profile-nav-tabs pl-2" classicTabs >
                        <MDBNavItem>
                            <MDBNavLink to="#"
                                        className={this.state.activeItemClassicTabs1 === "1" ? "active tab-header" : " tab-header "}
                                        onClick={this.toggleClassicTabs1("1")}>
                                <span style={{fontSize: "large", fontWeight: "normal", color: "black"}}>About</span>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem hidden={profile.gallery.length === 0}>
                            <MDBNavLink to="#"
                                        className={this.state.activeItemClassicTabs1 === "2" ? "active tab-header" : " tab-header "}
                                        onClick={this.toggleClassicTabs1("2")}>
                                <span style={{fontSize: "large", fontWeight: "normal", color: "black"}}>Gallery</span>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#"
                                        className={this.state.activeItemClassicTabs1 === "3" ? "active tab-header" : "tab-header"}
                                        onClick={this.toggleClassicTabs1("3")}>
                                <span style={{fontSize: "large", fontWeight: "normal", color: "black"}}>Events</span>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavbarNav right className="d-flex flex-row mr-5">
                            <MDBNavItem>
                                {/* <HandlesList handles={profile.handles} /> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBBtn color="black" className="invite-btn mr-5" rounded>
                                    <span style={{fontWeight: "normal", color: "white"}}>Send Invitation</span>
                                </MDBBtn>
                            </MDBNavItem>
                            <MDBNavItem className="mt-5">
                                <span onClick={ () => {
                                    this.props.doProfileBookmark(profile.user_name)
                                    this.setState({ bookmark: !this.state.bookmark })
                                    } }
                                    style={{fontSize: "large", fontWeight: "normal", color: "black"}}>
                                    <MDBIcon far={!this.state.bookmark} icon="bookmark" size='lg'/>
                                </span>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItemClassicTabs1}>
                        <MDBTabPane tabId="1">
                            <AboutTab/>
                        </MDBTabPane>
                        <MDBTabPane tabId="2">
                            <GalleryTab/>
                        </MDBTabPane>
                        <MDBTabPane tabId="3">
                            EVENTS
                        </MDBTabPane>
                    </MDBTabContent>
                </div>
            </MDBContainer>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile,
    user: state.user,
})

const mapDispatchToProps = {
    doProfileBookmark
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsPage);
