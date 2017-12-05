let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {

  }

  passengers() {

  }
}

let passengerId = 0

class Passenger {
    constructor(name) {
      this.name = name
      this.id = ++passengerId
      store.passengers.push(this)
    }

    trips() {

    }

    drivers() {

    }

}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    console.log(driver.id)
    this.driverId = driver
    this.passengerId = passenger
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return(this.driverId)
  }

  passenger() {
    return(this.passengerId)
  }
}
