function createCar(obj) {
    let car = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    }
    return Object.assign(car, obj)
}

console.log(createCar({ name: 'Haval', hp: 198 }))