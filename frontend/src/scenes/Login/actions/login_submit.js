import { login } from "_actions/auth";

export async function loginFormSubmit(values, dispatch, props){
    const { user_name, password } = values;
    await dispatch(login(user_name,password));
    // if page opens again it means the credentials we wrong
    props.history.replace('/login', { warn: true, message: "Invalid Username/Password"})
}