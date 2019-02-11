import React, { Component } from 'react';

import {
  Grid,
  Header

} from 'semantic-ui-react';


export default class FooterMail extends Component {

    render(){
        return(
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

        );
    }
}
