import React, { Component } from "react";
import { withRouter, Switch } from "react-router-dom";
import { MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon } from "mdbreact";
import Route from '_containers/custom_route';
import InvitesSection from './scenes/invites/invites';
import BookmarksSection from './scenes/bookmarks/bookmarks';
import SettingsSection from './scenes/settings/settings';
import ProfileSection from './scenes/profile/profile';
import "./dashboard.css";

class DashboardPage extends Component {
    state = {
        sideNavLeft: false,
        sideNavRight: false
    }

    sidenavToggle = sidenavId => () => {
    const sidenavNr = `sideNav${sidenavId}`
    this.setState({
        [sidenavNr]: !this.state[sidenavNr]
    });
    };

    render() {
        return (
            <div>
                {/* Small screen SideNav */}
                <MDBSideNav
                fixed mask="rgba-black"
                slim
                triggerOpening={this.state.sideNavLeft}
                breakWidth={0}
                className="dashboard-sidebar-sm d-block d-md-none"
                >
                    <br/><br/>
                    <MDBSideNavNav>
                        <MDBSideNavLink >
                            Hi, Username
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard">
                            <MDBIcon icon="user-circle" className="mr-2" size="lg"/>User Profile
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard/invites">
                            <MDBIcon icon="envelope" className="mr-2" size="lg"/>Invites
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard/bookmarks">
                            <MDBIcon icon="bookmark" className="mr-2" size="lg"/>Bookmarks
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard/settings">
                            <MDBIcon icon="cog" className="mr-2" size="lg"/>Settings
                        </MDBSideNavLink>
                        <hr className="my-1"/>
                        <MDBSideNavLink to="/logout">
                            <MDBIcon icon="power-off" className="mr-2" size="lg"/>Logout
                        </MDBSideNavLink>
                        <hr className="my-1"/>
                    </MDBSideNavNav>
                </MDBSideNav>
                {/* Large screen SideNav */}
                <MDBSideNav
                fixed mask="rgba-black"
                triggerOpening={this.state.sideNavLeft}
                breakWidth={0}
                className="dashboard-sidebar d-none d-md-block"
                >
                    <br/><br/>
                    <MDBSideNavNav>
                        <MDBSideNavLink >
                            <h6>Hi, Username</h6>
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard">
                            <MDBIcon icon="user-circle" className="mr-2" size="lg"/>Dashboard
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard/invites">
                            <MDBIcon icon="envelope" className="mr-2" size="lg"/>Invites
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard/bookmarks">
                            <MDBIcon icon="bookmark" className="mr-2" size="lg"/>Bookmarks
                        </MDBSideNavLink>
                        <MDBSideNavLink to="/dashboard/settings">
                            <MDBIcon icon="cog" className="mr-2" size="lg"/>Settings
                        </MDBSideNavLink>
                        <hr className="my-1"/>
                        <MDBSideNavLink to="/logout">
                            <MDBIcon icon="power-off" className="mr-2" size="lg"/>Logout
                        </MDBSideNavLink>
                        <hr className="my-1"/>
                    </MDBSideNavNav>
                </MDBSideNav>
                <MDBContainer fluid className="pl-3">
                    <Switch>
                        <Route exact path="/dashboard/" component={ProfileSection} />
                        <Route exact path="/dashboard/invites" component={InvitesSection} />
                        <Route exact path="/dashboard/bookmarks" component={BookmarksSection} />
                        <Route exact path="/dashboard/settings" component={SettingsSection} />
                    </Switch>
                </MDBContainer>
            </div>
        );
    }
}

export default withRouter(DashboardPage);
