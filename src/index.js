module.exports = function warmup(temperature) {
  const fhConst = 32;
  const multiply = 9/5;

  return (temperature * multiply) + fhConst;
};
