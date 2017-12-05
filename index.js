let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
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
    }

    trips() {

    }

    drivers() {

    }

}

let tripId = 0

class Trip {
  constructor(driverId, passengerId) {
    this.driverId = driverId
    this.passengerId = passengerId
    this.id = ++tripId
  }

  driver() {

  }

  passenger() {

  }
}
