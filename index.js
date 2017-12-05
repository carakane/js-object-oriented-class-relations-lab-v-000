let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return(store.trips.filter(trip => trip.driverId === this.id))
  }

  passengers() {
    console.log(this.trips().forEach(trip => console.log(trip.passengerId)))
    console.log(this.trips().forEach(function(trip) {
      store.passengers.find(passenger => passenger.id === trip.passengerId)}))
    // return(store.passengers.find(passenger => passenger.id === this.trips()[0].passengerId))
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
      return(store.trips.filter(trip => trip.passengerId === this.id))
    }

    drivers() {
      return(store.drivers.find(driver => driver.id === this.trips()[0].driverId))
    }

}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return(store.drivers.find(driver => driver.id === this.driverId))
  }

  passenger() {
    return(store.passengers.find(passenger => passenger.id === this.passengerId))
  }
}
