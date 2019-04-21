import React from 'react';
import { Route as RootRoute, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Route = (props) => {
    if(props.user.loggedIn === false && props.private)
        return  <Redirect 
                 to={{
                    pathname: "/login",
                    state: { message: "Please login in order to continue" }
                 }} 
                 from={props.history.location.pathname} 
                />
    else if(props.user.loggedIn === true && props.publicOnly)
        return <Redirect to="/" />
    else return <div style={{minHeight: "94vh", "marginBottom": "2vh"}}><RootRoute {...props} /></div>
    
}

let mapStateToProps = (state) => (
    {user: state.user}
)

export default withRouter(connect(mapStateToProps)(Route));