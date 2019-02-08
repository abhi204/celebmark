import React from 'react';
import {Form} from 'semantic-ui-react';

const renderField = ({
     input,
     placeholder,
     type,
     meta: { touched, error, warning }
    }) => (
        <div>
            <label style={{ color:"tomato", fontSize:'0.8em'}}>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </label>
            <Form.Field>
            <input style={ touched && error ? {border: '1px solid Red', color:'Black'} : {} }
            {...input}
            placeholder={placeholder}
            type={type}
            />
            </Form.Field>
        </div>
    )

export default renderField;