import React, { Component } from 'react';
import { Route as RootRoute, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Route extends Component {

    render(){
        const { user, privateURL, publicOnly, history } = this.props;
        let goto = sessionStorage.getItem('goto');
        
        window.scrollTo({top: 0, behavior: 'smooth'})
        
        if(user.loggedIn === false && privateURL)
        {
            sessionStorage.setItem('goto', history.location.pathname)
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
            return (
                <div className="page-content" >
                    <RootRoute {...this.props} />
                </div>
            );
    
    }
}

let mapStateToProps = (state) => (
    {user: state.user}
)

export default withRouter(connect(mapStateToProps)(Route));