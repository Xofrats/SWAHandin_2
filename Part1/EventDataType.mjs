class EventDataType {
    constructor(time, place, type, unit) {
        this.time = time
        this.place = place
       this.type = type
       this.unit = unit
    }

    getTime() { return this.time}

    getPlace() { return this.place}

   getType() { return this.type}

   getUnit() { return this.unit}
}

export { EventDataType }

// let test1 = new EventDataType("08-10-2021", "VIA", "Rain", "MM")

// console.log(test1.getPlace())