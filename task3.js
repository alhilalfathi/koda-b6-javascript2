const temperature = {
    base: 10,
    toFahrenheit: function(){
        // console.log(`${this.base}`)
        baseString = `${this.base}`
        baseNumber = Number(baseString)
        return `${this.base}` * (9/5) + 32
    },
    toKelvin: function(){
        baseString = `${this.base}`
        baseNumber = Number(baseString)
        return baseNumber + 273.15
    },
    toReamur: function(){
        baseString = `${this.base}`
        baseNumber = Number(baseString)
        return baseNumber * (4/5)
    }
}
console.log(temperature.base)
console.log(temperature.toFahrenheit())
console.log(temperature.toKelvin())
console.log(temperature.toReamur())