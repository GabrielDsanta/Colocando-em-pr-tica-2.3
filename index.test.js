const index = require("./index.js");
test("Calcular juros simples", () => {
  expect(index.CalculateCompoundsInterest(1000, 2, 1.5)).toBe(360);
});

test("Calcular juros compostos", () => {
  expect(index.CalculatePastProfitability(1000, 2, 1.5)).toBe(1428.25);
});

test("Calcular rentabilidade real", () => {
  expect(index.CalculateProfitability(8, 4)).toBe(0.038);
});

test("Calcular rentabilidade passada", () => {
  expect(index.CalculateSimpleInterest(14, 9)).toBe(55.56);
});
