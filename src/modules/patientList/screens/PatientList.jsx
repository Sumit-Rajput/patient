import * as React from 'react';
import { connect } from 'react-redux';

const style = require('./patientList.css');

class PatientList extends React.Component {

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
        <div className={style.root}>
          {this.getPatientsElements()}
        </div>
      </div>
    );
  }
}


PatientList.propTypes = {
  patients: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  patients: state.patient.list,
});


export default connect(mapStateToProps, null)(PatientList);
