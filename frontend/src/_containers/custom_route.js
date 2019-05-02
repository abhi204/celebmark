import React from 'react';
import { Route as RootRoute, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Route = (props) => {
    const { user, privateURL, publicOnly } = props;
    const state = props.location.state || {};
    let goto = sessionStorage.getItem('goto');
    if(user.loggedIn === false && privateURL)
    {
        sessionStorage.setItem('goto', props.history.location.pathname) // Temporary Solution to redirects
        return  <Redirect 
                 to={{
                    pathname: "/login",
                    state: { 
                        message: "Please login to continue",
                        warn: true,
                    }
                 }} 
                />
    }
    else if(user.loggedIn === true && publicOnly)
        return <Redirect to="/" />
    else if(user.loggedIn === true && goto)
    {
        sessionStorage.removeItem('goto');
        return <Redirect to={goto} />
    }
    else 
        return <div style={{minHeight: "94vh", "marginBottom": "2vh"}}><RootRoute {...props} /></div>
    
}

let mapStateToProps = (state) => (
    {user: state.user}
)

export default withRouter(connect(mapStateToProps)(Route));