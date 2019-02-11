import React, { Component } from 'react';

import {
  Divider,
  List,
  Icon

} from 'semantic-ui-react';


export default class FooterBootom extends Component {

    render(){
        return(

          <div>
          <Divider inverted section />
          <Icon name='typo3' size='huge' /><br/>
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
            </div>


        );
    }
}
