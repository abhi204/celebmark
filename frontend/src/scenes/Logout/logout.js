import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '_actions/auth';


class LogoutPage extends Component {

    componentDidMount(){
        this.props.logout();
    }

    render(){
        return (
            <div>
                {
                    this.props.user.loggedIn === false ?
                    <Redirect to="/" />
                    :
                    <div></div>
                }
            </div>
        );
    }
}

const mapDispatchToProps = {
    logout,
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps,mapDispatchToProps)(LogoutPage);