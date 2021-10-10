import { EventDataType } from './EventDataType.mjs'

class WeatherPrediction extends EventDataType {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(time, place, type, unit)
        this.minValue = minValue
        this.maxValue = maxValue
    }

    getMin() {
        return this.minValue
    }

    getMax() {
        return this.maxValue
    }

    matches(weatherData){
        if(weatherData.getTime() === this.time && weatherData.getPlace() === this.place && weatherData.getType() === this.type && weatherData.getUnit() === this.unit && weatherData.getValue() >= this.minValue && weatherData.getValue() <= this.maxValue){
            return true
        } else {
            return false
        }
    }


}

export { WeatherPrediction }

// let test1 = new WeatherPrediction("08-10-2021", "VIA", "Rain", "MM")

// console.log(test1.getPlace())