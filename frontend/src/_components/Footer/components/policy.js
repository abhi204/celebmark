import React, { Component } from 'react';

import {
  Grid,
  Header,
  List,

} from 'semantic-ui-react';


export default class FooterPolicy extends Component {

    render(){
        return(


          <Grid.Column width={2}>
            <Header inverted as='h4' content='Policy' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>



        );
    }
}
