import * as React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import { connect } from 'react-redux';

const style = require('./app.css');

const App = props => (
  <div className={style.mainBodyStyle} >
    <LinearProgress mode="indeterminate" style={{ visibility: props.showLoader ? 'visible' : 'hidden' }} />
    {props.children}
  </div>
);

App.propTypes = {
  showLoader: React.PropTypes.bool.isRequired,
  children: React.PropTypes.element.isRequired,
};

const mapStateToProps = state => ({
  showLoader: state.loader.showLoader,
});

export default connect(mapStateToProps, null)(App);
