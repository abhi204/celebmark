import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCelebProfile} from '../../../_actions/profile';
import ProfileTabs from './containers/profile_content';
import './profile.css'

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
            return <div>LOADING</div>
        else if (!profile.loading && !profile.user_name)
            return <div>NO CELEB</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);