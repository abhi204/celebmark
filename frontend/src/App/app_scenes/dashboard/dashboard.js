import React, { Component } from "react";
import { withRouter, Switch } from "react-router-dom";
import { MDBSideNavLink, MDBIcon, MDBRow, MDBCol } from "mdbreact";
import Route from '_containers/custom_route';
import InvitesSection from './scenes/invites/invites';
import BookmarksSection from './scenes/bookmarks/bookmarks';
import SettingsSection from './scenes/settings/settings';
import ProfileSection from './scenes/profile/profile';
import "./dashboard.css";

class DashboardPage extends Component {

    render() {
        return (
            <MDBRow>
                <MDBCol sm="1" md="3" className="dashboard-sidenav d-none d-sm-block h-auto">
                {/* sm screen sidenav for sm screens */}
                    <div className="position-fixed d-none d-sm-block d-md-none">
                    <MDBSideNavLink to="/dashboard">
                        <MDBIcon icon="user-circle" className="mr-2" size="lg"/><br/>
                    </MDBSideNavLink>
                    <MDBSideNavLink to="/dashboard/invites">
                        <MDBIcon icon="envelope" className="mr-2" size="lg"/><br/>
                    </MDBSideNavLink>
                    <MDBSideNavLink to="/dashboard/bookmarks">
                        <MDBIcon icon="bookmark" className="mr-2" size="lg"/><br/>
                    </MDBSideNavLink>
                    <MDBSideNavLink to="/dashboard/settings" >
                        <MDBIcon icon="cog" className="mr-2" size="lg"/><br/>
                    </MDBSideNavLink>
                    <hr className="my-1"/>
                    <MDBSideNavLink to="/logout" >
                        <MDBIcon icon="power-off" className="mr-2" size="lg"/><br/>
                    </MDBSideNavLink>
                    </div>
                    {/* Sidenav menu for large screens */}
                    <div className="position-fixed d-none d-md-block">
                    <MDBSideNavLink to="/dashboard">
                        <MDBIcon icon="user-circle" className="mr-2" size="lg"/>Profile<br/>
                    </MDBSideNavLink>
                    <MDBSideNavLink to="/dashboard/invites">
                        <MDBIcon icon="envelope" className="mr-2" size="lg"/>Invites<br/>
                    </MDBSideNavLink>
                    <MDBSideNavLink to="/dashboard/bookmarks">
                        <MDBIcon icon="bookmark" className="mr-2" size="lg"/>Bookmarks<br/>
                    </MDBSideNavLink>
                    <MDBSideNavLink to="/dashboard/settings" >
                        <MDBIcon icon="cog" className="mr-2" size="lg"/>Settings<br/>
                    </MDBSideNavLink>
                    <hr className="my-1"/>
                    <MDBSideNavLink to="/logout" >
                        <MDBIcon icon="power-off" className="mr-2" size="lg"/>Signout<br/>
                    </MDBSideNavLink>
                    </div>
                </MDBCol>
                <MDBCol xs="12" sm="11" md="9" id="d-section">
                    <Switch>
                        <Route exact path="/dashboard/" component={ProfileSection} />
                        <Route exact path="/dashboard/invites" component={InvitesSection} />
                        <Route exact path="/dashboard/bookmarks" component={BookmarksSection} />
                        <Route exact path="/dashboard/settings" component={SettingsSection} />
                    </Switch>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default withRouter(DashboardPage);
