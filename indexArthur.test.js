
const index = require('./indexArthur.js')

test('Calcular gastos com combustivel', () => {
    expect(index.interestCalculation(1000, 2, 1.5)).toBe(360)
}) 

test('Calcular gastos com combustivel', () => {
    expect(index.CompoundInterest(1000, 2, 1.5)).toBe(1428.25)
}) 

test('Calcular gastos com combustivel', () => {
    expect(index.realProfitability(8, 4)).toBe(0.038)
}) 

test('Calcular gastos com combustivel', () => {
    expect(index.pastProfitability(14, 9)).toBe(55.56)
})