import React from 'react'
import {
 Card,
 Icon,
 Image
} from 'semantic-ui-react'

export default class PublicHomePage extends Component {
    render(){
        return (

            <Container><br />
              <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Card.Header><center>Full name Of User</center> </Card.Header>
                  <Card.Meta><center>
                    <span className='date'>Email</span><br/>
                    <span className='date'>Phone Number</span><br/>
                    <span className='date'>Username</span><br/>

                    </center>
                  </Card.Meta>
                  <Card.Description>This is a demo signin card for development.</Card.Description>
                </Card.Content>
                <Card.Content extra><center>
                  <a>
                    <Icon name='logout' />
                  Logout
                  </a></center>
                </Card.Content>
              </Card>

            </Container>
        );
    }
}
