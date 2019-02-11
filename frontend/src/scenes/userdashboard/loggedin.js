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

              <Card>
   <Card.Content>
     <Card.Header>Recent Activity</Card.Header>
   </Card.Content>
   <Card.Content>
     <Feed>
       <Feed.Event>
         <Feed.Label image='/images/avatar/small/jenny.jpg' />
         <Feed.Content>
           <Feed.Date content='1 day ago' />
           <Feed.Summary>
             You added <a>Jenny Hess</a> to your <a>coworker</a> group.
           </Feed.Summary>
         </Feed.Content>
       </Feed.Event>

       <Feed.Event>
         <Feed.Label image='/images/avatar/small/molly.png' />
         <Feed.Content>
           <Feed.Date content='3 days ago' />
           <Feed.Summary>
             You added <a>Molly Malone</a> as a friend.
           </Feed.Summary>
         </Feed.Content>
       </Feed.Event>

       <Feed.Event>
         <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
         <Feed.Content>
           <Feed.Date content='4 days ago' />
           <Feed.Summary>
             You added <a>Elliot Baker</a> to your <a>musicians</a> group.
           </Feed.Summary>
         </Feed.Content>
       </Feed.Event>
     </Feed>
   </Card.Content>
 </Card>
          </Container>


        );
    }
}
