let storedPassword = null;
export const required = value => (value ? undefined: 'This field is required');
export const maxChars = max => ( value => ( value.length <= max? undefined: `Maximum ${max} Characters Permitted`));
export const minChars = min => ( value => ( value.length >= min? undefined: `Minimum ${min} Characters Required`));
export const isChecked = value => (value);
export const isNum = value => ( /[0-9]/i.test(value) ? undefined: "Enter Digits Only")
export const isAlpha = value => ( /[A-Za-z]/i.test(value) ? undefined: "Enter Valid Characters")
export const isAlphaNum = value => ( /^[A-Za-z0-9]+$/i.test(value) ? undefined: "No Special Characters or whitespace allowed")

export const isMobileNumber = value => (value && value.length === 10 && isNum(value) ? undefined: "Enter a valid Mobile number (Excluding Country Code)");
export const setPassword = (value) => { storedPassword=value};
export const matchPassword = (value) => (storedPassword === value ? undefined: "Passwords Don't match");