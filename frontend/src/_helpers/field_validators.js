export const required = value => (value ? undefined: 'This field is required');
export const maxChars = max => ( value => ( value.length <= max? undefined: `Maximum ${max} Characters Permitted`));
export const minChars = min => ( value => ( value.length >= min? undefined: `Minimum ${min} Characters Required`));
export const matchPassword = (password2, allValues) => (password2 === allValues.password ? undefined: "Passwords Don't match");

export const isAlpha = value => ( /^[A-Za-z]+$/i.test(value) ? undefined: "Enter Valid Characters")
export const isNum = value => ( /^[0-9]+$/i.test(value) ? undefined: "Enter Digits Only")
export const isAlphaNum = value => ( /^[A-Za-z0-9]+$/i.test(value) ? undefined: "No Special Characters or whitespace allowed")
export const isMobileNumber = value => (value && value.length === 10 && isNum(value)===undefined ? undefined: "Enter a valid Mobile number (without country Code)");
export const isValidEmail = value => (/\S+@\S+\.\S+/i.test(value) ? undefined : "Not a valid Email address")

export const validators = {
    required,
    maxChars,
    minChars,
    matchPassword,
    isAlpha,
    isNum,
    isAlphaNum,
    isMobileNumber,
    isValidEmail,
}

