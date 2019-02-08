import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Icon,
  Segment,
  Button,
} from 'semantic-ui-react';

export default class PublicHomePage extends Component {
    render(){
        return (
          <div>
            <Container><br />
                <Link to='/signup'><Button floated='right'>Sign Up</Button></Link>
                <Link to='/login'><Button floated='right'>Login</Button></Link>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Container>



                <Segment inverted vertical style={{ margin: '1em 0em 0em', padding: '2.2em 0em' }}>
                  <Container textAlign='center'>
                    <Grid divided inverted stackable>
                      <Grid.Column width={2}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={2}>
                        <Header inverted as='h4' content='Help' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={2}>
                        <Header inverted as='h4' content='Policy' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={2}>
                        <Header inverted as='h4' content='Social' />
                        <List link inverted>
                          <List.Item as='a'>Facebook</List.Item>
                          <List.Item as='a'>Instagram</List.Item>
                          <List.Item as='a'>Twitter</List.Item>
                          <List.Item as='a'>Telegram</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <Header inverted as='h4' content='Contact Us' />
                        <p>
                        Street<br/>
                        City<br/>
                        State<br/>
                        Zip Code<br/>
                        Mobile Number
                        </p>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <Header inverted as='h4' content='Mail Us' />
                        <p>
                        Street<br/>
                        City<br/>
                        State<br/>
                        Zip Code<br/>
                        Mobile Number
                        </p>
                      </Grid.Column>
                    </Grid>

                    <Divider inverted section />
                    <Icon name='typo3' centered size='huge' /><br/>
                    <List horizontal inverted divided link size='small'>
                      <List.Item as='a' href='#'>
                        Site Map
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Contact Us
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Terms and Conditions
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Privacy Policy
                      </List.Item>
                    </List>
                  </Container>
                </Segment>
              </div>

        );
    }
}
