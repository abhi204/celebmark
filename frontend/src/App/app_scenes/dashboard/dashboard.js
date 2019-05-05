import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import Route from '_containers/custom_route';
import InvitesSection from './containers/invites/invites_section'
import BookmarksSection from './containers/bookmarks/bookmarks_section'
import SettingsSection from './containers/settings/settings_section'
import DetailsSection from './containers/details/details_section'
import {MDBIcon} from "mdbreact";


class DashboardPage extends Component {

    render(){
        return(
            <div>
                <h2 className="h2-responsive  text-center mt-4 mb-3 black-text" color=" teal darken-1">
                    <MDBIcon fas icon="server" size="md" className="pink-text mr-2"/>
                    <strong>CelebMark Dashboard</strong>
                </h2>
                <Switch>
                    <Route exact path="/dashboard/details" component={DetailsSection} />
                    <Route exact path="/dashboard/invites" component={InvitesSection} />
                    <Route exact path="/dashboard/bookmarks" component={BookmarksSection} />
                    <Route exact path="/dashboard/settings" component={SettingsSection} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(DashboardPage);