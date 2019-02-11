import React, { Component } from 'react';
import FooterAbout from './components/about';
import FooterHelp from './components/help';
import FooterPolicy from './components/policy';
import FooterSocial from './components/social';
import FooterContact from './components/contact';
import FooterMail from './components/mail';
import FooterBootom from './components/bootom';

import {
  Container,
  Grid,
  Segment
} from 'semantic-ui-react';


export default class Footer extends Component {

    render(){
        return(
          <Segment inverted vertical style={{ margin: '1em 0em 0em', padding: '2.2em 0em' }}>
            <Container textAlign='center'>
              <Grid divided inverted stackable>

                    <FooterAbout />
                    <FooterHelp />
                    <FooterPolicy />
                    <FooterSocial />
                    <FooterContact />
                    <FooterMail />
              </Grid>
                <FooterBootom/>
            </Container>
          </Segment>
        );
    }
}
