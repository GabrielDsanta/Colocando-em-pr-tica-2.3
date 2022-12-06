let textErro = "Valor Invalido";
function interestCalculation(initialValue, InterestRate, calculationTime) {
  if (initialValue < 0) {
    console.log(textErro);
  } else if (InterestRate < 0) {
    console.log(textErro);
  } else if (Number.isInteger(calculationTime) === true) {
    console.log(textErro);
  } else {
    return initialValue * (InterestRate / 100) * (calculationTime * 12);
  }
}
function CompoundInterest(initialValue, InterestRate, calculationTime) {
  if (initialValue < 0) {
    console.log(textErro);
  } else if (InterestRate < 0) {
    console.log(textErro);
  } else if (Number.isInteger(calculationTime) === true) {
    console.log(textErro);
  } else {
    return initialValue * (1 + InterestRate / 100) ** (calculationTime * 12);
  }
}
function realProfitability(profitability, inflation) {
  if (profitability < 0 && Number.isInteger(profitability) === false) {
    console.log(textErro);
  } else if (inflation < 0 && Number.isInteger(inflation === false)) {
    console.log(textErro);
  } else {
    console.log(1 + profitability / 100);
    console.log(1 + inflation / 100);
    return (1 + profitability / 100) / (1 + inflation / 100) - 1;
  }
}
function pastProfitability(initialValue, previousPrice) {
  if (initialValue > 0 && previousPrice > 0) {
    return (initialValue / previousPrice) * 100 - 100;
  } else {
    console.log(textErro);
  }
}

module.exports = {
  interestCalculation,
  CompoundInterest,
  realProfitability,
  pastProfitability,
};
