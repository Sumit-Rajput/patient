import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import TextField from '../../../components/TextField';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import DatePicker from '../../../components/DatePicker';
import linkState from '../../../utils/linkState';
import validate from './validate';
import { addPatient } from '../../patient/actions';

const style = require('./addPatient.css');

class AddPatient extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    phone: '',
    notes: '',
    errors: {},
  })

  submitButtonCalled = () => {
    if (validate(this)) {
      const { errors, ...patient } = this.state;

      this.props.addPatient(patient).then((success, error) => {
        if (success) {
          this.setState(this.getInitialState());
        } else {
          const serverError = {
            server: error,
          };
          this.setState({ errors: serverError });
        }
      });
    }
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <h3>Add Patient</h3>
          <Link className={style.link} to="/patient">Patient List</Link>
        </div>
        <form className={style.insideForm}>
          <div className={style.subContainer}>
            <TextField label="First Name" {...linkState(this, 'firstName')} />
            <TextField label="Last Name" {...linkState(this, 'lastName')} />
          </div>
          <div className={style.subContainer}>
            <TextField label="Email" {...linkState(this, 'email')} />
            <TextField label="Phone" {...linkState(this, 'phone')} />
          </div>
          <div className={style.subContainer}>
            <Select label="Gender" options={['Male', 'Female']} {...linkState(this, 'gender')} />
            <DatePicker label="Date of birth" {...linkState(this, 'dob')} />
          </div>
          <div>
            <TextArea label="Notes" {...linkState(this, 'notes')} />
          </div>
          {this.state.errors.server && <h6 className={style.error} >{this.state.errors.server}</h6>}
          <button className={style.submitButton} type="button" onClick={this.submitButtonCalled}>Submit</button>
        </form>
      </div>
    );
  }
}

AddPatient.propTypes = {
  addPatient: React.PropTypes.func.isRequired,
};

AddPatient.defaultProps = { error: '' };

const mapDispatchToProps = dispatch => ({
  addPatient: values => dispatch(addPatient(values)),
});

export default connect(null, mapDispatchToProps)(AddPatient);
