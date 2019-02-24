import { API_USER_REGISTER_CHECK } from "_consts/api";

const messages = {
    user_name: 'This username is already in use',
    email: 'Email already taken',
    mobile: 'This number is already in use',
}

export var asyncValidate = async (values, dispatch, props, field,) => 
    {   
        // Do nothing on Form Submit Button
        if(field===undefined) 
            return
        
        let errors = {...props.asyncErrors, ...props.syncErrors} // errors before async validation
        return fetch(`${API_USER_REGISTER_CHECK}?${field}=${values[field]}`, {method: 'head'})
                .then(resp => {
                        errors[field] = resp.status === 200 ? messages[field] : null; // update current field error in previous errors list
                    if(errors) 
                        throw errors; // if there are errors, throw them
                })
    }


