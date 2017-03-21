import * as React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { login } from '../actions/loginAction';
import linkState from '../../../utils/linkState';

const style = require('./login.css');

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      usernameErrorText: '',
      password: '',
      passwordErrorText: '',
    };
  }

  validation = () => {
    let isValid = true;
    if (this.state.username === '' && this.state.password === '') {
      this.setState({ usernameErrorText: 'Required', passwordErrorText: 'Required' });
      isValid = false;
    } else if (this.state.username === '') {
      this.setState({ usernameErrorText: 'Required' });
      isValid = false;
    } else if (this.state.password === '') {
      this.setState({ passwordErrorText: 'Required' });
      isValid = false;
    } else {
      this.setState({ usernameErrorText: '', passwordErrorText: '' });
    }
    return isValid;
  }

  loginButtonClicked = () => {
    if (this.validation()) {
      this.props.callLogin(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <div className={style.container}>
        <Paper className={style.formContainer} zDepth={1}>
          <Paper className={style.header} zDepth={1}>
            <h4 className={style.headerTitle}>
              Login
            </h4>
          </Paper>
          <div className={style.content}>
            <TextField
              floatingLabelText={'Username'}
              errorText={this.state.usernameErrorText}
              {...linkState(this, 'username')}
            />
            <TextField
              floatingLabelText={'Password'}
              type={'password'}
              errorText={this.state.passwordErrorText}
              {...linkState(this, 'password')}
            />
            <FlatButton
              label={this.props.isLoading ? 'Please Wait...' : 'Login'}
              onClick={this.loginButtonClicked}
              disabled={this.props.isLoading}
            />
          </div>
          {this.props.error && <h5 className={style.error}>{this.props.error}</h5>}
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  callLogin: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
};

Login.defaultProps = { error: '' };

const mapStateToProps = state => ({
  isLoading: state.authentication.isLoading,
  error: state.authentication.error,
});

const mapDispatchToProps = dispatch => ({
  callLogin: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
