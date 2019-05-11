import React, { Component } from "react";
import { withRouter, Switch } from "react-router-dom";
import { MDBSideNavLink, MDBContainer, MDBIcon } from "mdbreact";
import Route from '_containers/custom_route';
import InvitesSection from './scenes/invites/invites';
import BookmarksSection from './scenes/bookmarks/bookmarks';
import SettingsSection from './scenes/settings/settings';
import ProfileSection from './scenes/profile/profile';
import "./dashboard.css";

class DashboardPage extends Component {

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav d-none d-lg-block">
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
                </div>
                <MDBContainer fluid className="p-0" id="d-section">
                <div className="position-relative h-100">
                <div id="dummySidenav" className="dummy-sidenav d-none d-lg-inline">
                </div>


                    <Switch>
                        <Route exact path="/dashboard/" component={ProfileSection} />
                        <Route exact path="/dashboard/invites" component={InvitesSection} />
                        <Route exact path="/dashboard/bookmarks" component={BookmarksSection} />
                        <Route exact path="/dashboard/settings" component={SettingsSection} />
                    </Switch>
                </div>
                </MDBContainer>
            </div>
        );
    }
}

export default withRouter(DashboardPage);
