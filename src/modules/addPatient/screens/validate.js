const isNumeric = number => !isNaN(parseFloat(number)) && isFinite(number);

const validate = (self) => {
  const errors = {};
  const values = self.state;

  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'phone',
    'notes',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (values.phone && (!isNumeric(values.phone) || values.phone.length !== 10)) {
    errors.phone = 'Invalid Phone Number';
  }

  self.setState({ errors });

  return Object.keys(errors).length === 0;
};

export default validate;
