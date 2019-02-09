import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserSignupForm from './forms/user_form';
import myAction from '../actions/index';
import {
  Container,
  Header,
  Icon,
  Tab,
} from 'semantic-ui-react';

class UserSignupTab extends Component{

    render(){
        return(
        <Tab.Pane>
            <Container>
                <div>< br/>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' color='green' circular />
                        <Header.Content>Celeb Mark | User Signup</Header.Content>
                    </Header>
                </div>
                <UserSignupForm onSubmit={this.props.myAction}/>
            </Container>
        </Tab.Pane>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => ({
    myAction: bindActionCreators(myAction,dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSignupTab);