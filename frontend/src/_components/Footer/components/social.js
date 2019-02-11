import React, { Component } from 'react';

import {
  Grid,
  Header,
  List,

} from 'semantic-ui-react';


export default class FooterSocial extends Component {

    render(){
        return(


          <Grid.Column width={2}>
            <Header inverted as='h4' content='Social' />
            <List link inverted>
              <List.Item as='a'>Facebook</List.Item>
              <List.Item as='a'>Instagram</List.Item>
              <List.Item as='a'>Twitter</List.Item>
              <List.Item as='a'>Telegram</List.Item>
            </List>
          </Grid.Column>



        );
    }
}
