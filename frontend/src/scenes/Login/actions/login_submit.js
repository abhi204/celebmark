import { login } from "_actions/auth";

export async function loginFormSubmit(values, dispatch, props){
    const { user_name, password } = values;
    await dispatch(login(user_name,password)); 
    props.history.replace('/login', { checkUser: true, message: "Invalid Username/Password"})
}