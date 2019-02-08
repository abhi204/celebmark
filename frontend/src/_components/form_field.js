import React from 'react';

const renderField = ({
     input,
     placeholder,
     type,
     meta: { touched, error, warning }
    }) => (
        <div>
            <label style={{ color:"tomato", fontSize:'0.7em'}}>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </label>
            <input style={ touched && error ? {backgroundColor: '#ffdcdc', color:'Black'} : {} }
            {...input}
            placeholder={placeholder}
            type={type}
            />
        </div>
    )

export default renderField;