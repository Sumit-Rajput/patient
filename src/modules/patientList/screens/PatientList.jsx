import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getPatients } from '../../patient/actions';

const style = require('./patientList.css');

const PatientItem = ({ patient }) => (
  <div className={style.item}>
    <label htmlFor="root">{`Name    : ${patient.firstName} ${patient.lastName}`}</label>
    <label htmlFor="root">{`DOB     : ${patient.dob}`}</label>
    <label htmlFor="root">{`Phone   : ${patient.phone}`}</label>
  </div>
);

class PatientList extends React.Component {

  componentWillMount() {
    this.props.getPatients();
  }

  getPatientsElements = () => (this.props.patients || []).map(patient => (
    <PatientItem key={`${patient.firstName}_${patient.lastName}`} patient={patient} />
  ));

  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <h2>Patient List</h2>
          <Link className={style.link} to="/add">Add patient</Link>
        </div>
        <div className={style.root}>
          {this.getPatientsElements()}
        </div>
      </div>
    );
  }
}

PatientList.propTypes = {
  patients: React.PropTypes.array.isRequired,
  getPatients: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  patients: state.patient.patientList,
});

const mapDispatchToProps = dispatch => ({
  getPatients: () => dispatch(getPatients()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
