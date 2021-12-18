const unitsMain = [
  { unit: 'cm', value: 393.701 },
  { unit: 'inch', value: 1000 },
  { unit: 'm', value: 39370.1 },
  { unit: 'ft', value: 12000 },
];
export default unitsMain;

  // 'mil' is the smallest value,
  // therefore we take it as a reference to the value of other units
  // Like:
  // 0,0254mm ===  1 mil
  // 1mm      ===  39.3701 mil
  // 1cm      ===  393.701 mil
  // 1m       ===  39370.1 mil
  // 1km       ===  39370000 mil