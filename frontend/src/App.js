import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
		<Form>
   	 <Form.Field>
     	 <label>First Name</label>
     		 <input placeholder='First Name' type='text' />
	</Form.Field>
    <Form.Field>
      	<label>Last Name</label>
      		<input placeholder='Last Name' type='text' />
    </Form.Field>
    <Form.Field>
     	 <label>Username</label>
     		 <input placeholder='Username' type='text' />
	</Form.Field>
	<Form.Field>
     	 <label>Email Address</label>
     		 <input placeholder='Your Email' type='email' />
	</Form.Field>
	<Form.Field>
     	 <label>Phone Number</label>
     		 <input placeholder='Phone' type='tel'/>
	</Form.Field>
	<Form.Field>
     	 <label>Password</label>
     		 <input placeholder='Password' type='password' />
	</Form.Field>
	<Form.Field>
     	 <label>Upload Profile Picture</label>
     		 <input type="file" name="pic" accept="image/*" />
	</Form.Field>

	<Form.Field>
     	 <label>Confirm Password</label>
     		 <input placeholder='Re-Enter Password' type='password' />
	</Form.Field>
    <Form.Field>
     	 <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    		<Button type='submit'>Signup</Button>
  </Form>
    );
  }
}

export default App;
