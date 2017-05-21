import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { getPatientListAction } from '../../patient/actions/patientListActions';

const style = require('./patientList.css');

class PatientList extends React.Component {

  componentWillMount() {
    this.props.getPatient();
  }

  getPatientsElements = () => (this.props.patients || []).map(patient => (
    <div className={style.item} key={patient.id}>
      <label htmlFor="root">{`Name    : ${patient.firstName} ${patient.lastName}`}</label>
      <label htmlFor="root">{`DOB     : ${patient.dob}`}</label>
      <label htmlFor="root">{`Phone   : ${patient.phone}`}</label>
    </div>
  ));

  render() {
    return (
      <div className={style.container}>
        <AppBar
          title={<span>Instagram Timeline</span>}
          iconElementLeft={<div />}
          iconElementRight={<div />}
        />
        <div className={style.root}>
          {this.props.isGettingPatient ? <h1>Loading ...</h1> : this.getPatientsElements()}
        </div>
      </div>
    );
  }
}


PatientList.propTypes = {
  getPatient: React.PropTypes.func.isRequired,
  patients: React.PropTypes.array.isRequired,
  isGettingPatient: React.PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isGettingPatient: state.patient.isGettingPatient,
  patients: state.patient.list,
});

const mapDispatchToProps = dispatch => ({
  getPatient: () => dispatch(getPatientListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
