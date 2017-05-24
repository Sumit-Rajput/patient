export default (self, key, onChange) => ({
  onChange: (e) => {
    self.setState({
      [key]: e.target.value,
    });

    if (onChange) {
      onChange.call(self, key, e.target.value);
    }
  },
  value: self.state[key],
  error: self.state.errors && self.state.errors[key],
});
