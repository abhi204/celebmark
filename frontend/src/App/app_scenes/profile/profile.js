import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getCelebProfile } from '_actions/profile';
import ProfileTabs from './containers/profile_content';
import './profile.css';
import { MDBSpinner } from "mdbreact";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {user_name: null};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let {user_name} = nextProps.match.params
        if (user_name !== prevState.user_name) {
            nextProps.getCeleb(user_name);
            return {user_name}
        }
        return null
    }

    render() {
        let {profile} = this.props;
        if (profile.loading)
            return (
            <div>
                <div 
                    className="d-flex 
                    flex-column
                    justify-content-center
                    align-items-center 
                    h-100"
                >
                    Loading..
                    <br/>
                    <MDBSpinner green />
                </div>
            </div>)
        else if (!profile.loading && profile.error)
            return <Redirect to="/404" />
        else
            return (
                <div style={{backgroundColor: "white"}}>
                    <ProfileTabs celeb={profile}/>
                </div>
            );
    }
}

const mapStateToProps = state => (
    {profile: state.profile}
)

const mapDispatchToProps = {
    getCeleb: getCelebProfile
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));