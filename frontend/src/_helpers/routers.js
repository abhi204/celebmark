import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let _PrivateRoute = (props) => {
    return this.props.loggedIn ? <Route { ...props } /> : <Redirect to='/login'/>
}

function mapStateToProps(state){
    return {loggedIn: state.loggedIn}
}

export var PrivateRoute = connect(mapStateToProps,)(_PrivateRoute);