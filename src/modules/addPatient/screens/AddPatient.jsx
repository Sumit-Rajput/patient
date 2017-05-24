import * as React from 'react';
import { connect } from 'react-redux';
import { addPatientAction } from '../../patient/actions/addPatientAction';
import TextField from '../../../components/TextField';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import DatePicker from '../../../components/DatePicker';
import linkState from '../../../utils/linkState';
import validate from './validate';

const style = require('./addPatient.css');

class AddPatient extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      phone: '',
      notes: '',
      errors: {},
    };
  }

  submitButtonCalled = () => {
    if (validate(this)) {
      console.log('No Erros');
    }
  }

  render() {
    return (
      <div className={style.container}>
        <form className={style.insideForm}>
          <TextField label="First Name" {...linkState(this, 'firstName')} />
          <TextField label="Last Name" {...linkState(this, 'lastName')} />
          <TextField label="Email" {...linkState(this, 'email')} />
          <TextField label="Phone" {...linkState(this, 'phone')} />
          <Select label="Gender" options={['Male', 'Female']} {...linkState(this, 'gender')} />
          <DatePicker label="Date of birth" {...linkState(this, 'dob')} />
          <TextArea label="Notes" {...linkState(this, 'notes')} />
          <button type="button" onClick={this.submitButtonCalled}>Submit</button>
        </form>
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
  handleSubmit: values => dispatch(addPatientAction(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);
