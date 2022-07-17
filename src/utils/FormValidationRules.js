/**
 * Function to validate email
 * @param values - An object containing all the values of the form.
 * @returns An object with the key of email and the value of the error message.
 */
export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}
