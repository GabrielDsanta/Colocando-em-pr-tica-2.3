

console.log(CalculateSimpleInterest(1000, 2, 1.5))
console.log(CalculateCompoundsInterest(1000, 2, 1.5))
console.log(CalculateProfitability(8, 4))
console.log(CalculatePastProfitability(14, 9))



function CalculateSimpleInterest(initialValue, rate, months){
    if(initialValue !== Math.floor(initialValue) | rate !== Math.floor(rate) | months == Math.floor(months)){
        return undefined
    }
    rate = rate / 100
    months = months * 12

    const finalValue = initialValue * rate * months
    return finalValue
}

function CalculateCompoundsInterest(initialValue, rate, months){
    if(initialValue !== Math.floor(initialValue) | rate !== Math.floor(rate) | months == Math.floor(months)){
        return undefined
    }
    rate = rate / 100
    months = months * 12

    const finalValue = (initialValue * (1 + rate) ** months).toFixed(2)
    return finalValue
}

function CalculateProfitability(profitability, inflation){
    if(profitability !== Math.floor(profitability) | profitability < 0 | inflation < 0 | inflation !== Math.floor(inflation)){
        return undefined
    }

    profitability = profitability / 100
    inflation = inflation /100

    const finalValue = ((1 + profitability) / (1 + inflation) - 1).toFixed(3)
    return finalValue
}

function CalculatePastProfitability(PA, PP){
    if(PA < 0 | PP < 0){
        return undefined
    }

    const finalValue = ((PA / PP) * 100 - 100).toFixed(2)
    return finalValue
}

module.exports = {CalculateCompoundsInterest, CalculatePastProfitability, CalculateProfitability, CalculateSimpleInterest}