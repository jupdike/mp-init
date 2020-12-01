let now = () => new Date();
exports = options => {
  // example of putting a helper function here
  let helperFunc = () => now().getFullYear();
  // return the global object to get things started
  return {
    currentYear: helperFunc
  }
};
