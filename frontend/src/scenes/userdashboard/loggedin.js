import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
  Container,
  Feed
} from 'semantic-ui-react';


export default class UserDashboard extends Component {

    render(){
        return(

          <Container align='center'><br />
              <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Card.Header><center>Deep Narayan Tandan</center> </Card.Header>
                  <Card.Meta><center>
                    <span className='date'>deepnarayan006@gmail.com</span><br/>
                    <span className='date'>+91-9982168317</span><br/>
                    <span className='date'>dntandan</span><br/>

                    </center>
                  </Card.Meta>
                  <Card.Description>Welcome To CelebMark <br/>  <Icon name='heart' /> <br/> Deep </Card.Description>
                </Card.Content>
                <Card.Content extra><center>
                  <a>
                    <Icon name='logout' />
                  Logout
                  </a></center>
                </Card.Content>
              </Card><br/>

          </Container>


        );
    }
}
