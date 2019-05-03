import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import Route from '_containers/custom_route';
import InvitesSection from './containers/invites/invites_section'
import BookmarksSection from './containers/bookmarks/bookmarks_section'
import SettingsSection from './containers/settings/settings_section'


class DashboardPage extends Component {

    render(){
        return(
            <div>DASHBOARD PAGE
                <Switch>
                    <Route exact path="/dashboard/invites" component={InvitesSection} />
                    <Route exact path="/dashboard/bookmarks" component={BookmarksSection} />
                    <Route exact path="/dashboard/settings" component={SettingsSection} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(DashboardPage);