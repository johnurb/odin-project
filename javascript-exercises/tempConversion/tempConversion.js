const ftoc = function(fTemp) {
  let cTemp = ((fTemp - 32) * (5/9)).toFixed(1);
  return (Math.round(cTemp * 10) / 10);
}

const ctof = function(cTemp) {
  let fTemp = (cTemp * (9/5) + 32).toFixed(1);
  return (Math.round(fTemp * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
}
