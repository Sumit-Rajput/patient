import * as React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { addPatientAction } from '../../patient/actions/addPatientAction';

const style = require('./addPatient.css');

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'gender',
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

  return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderSelectField = ({
  input,
  label,
  meta: {touched, error},
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)

// const renderDatePickerField = ({
//   input,
//   label,
//   meta: {touched, error},
//   ...custom
// }) => (
//   <DatePicker
//     hintText="Controlled Date Input"
//     {...input}
//     {...custom}
//   />
// )



class AddPatient extends React.Component {

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className={style.container}>
        <Paper className={style.formContainer} zDepth={1}>
          <form className={style.insideForm} onSubmit={handleSubmit}>
              <Field
                name="firstName"
                component={renderTextField}
                label="First Name"
              />
              <Field name="lastName" component={renderTextField} label="Last Name" />
              <Field name="email" component={renderTextField} label="Email" />
              
              <Field
                name="gender"
                component={renderSelectField}
                label="Gender"
              >
                <MenuItem value="ff0000" primaryText="Male" />
                <MenuItem value="0000ff" primaryText="Female" />
              </Field>


              <Field
                name="notes"
                component={renderTextField}
                label="Notes"
                multiLine={true}
                rows={2}
              />
            <div>
              <button type="submit" disabled={pristine || submitting}>Submit</button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

AddPatient.propTypes = {
  isAddingPatient: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
};

AddPatient.defaultProps = { error: '' };

const mapStateToProps = state => ({
  isAddingPatient: state.patient.isAddingPatient,
  error: state.patient.error,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (values) => dispatch(addPatientAction(values)),
});

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(AddPatient));
