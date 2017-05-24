import * as React from 'react';

const style = require('./app.css');

const App = props => (
  <div className={style.mainBodyStyle} >
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
