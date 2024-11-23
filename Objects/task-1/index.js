let cars = {
    dindong: {
        name: 'dindong',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 135,
    },
    sipup: {
        name: 'sipup',
        wheels: 6,
        doors: 5,
        isStarted: true,
        hp: 200,
    },
    huwong: {
        name: 'huwong',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 185,
    },
    chipes: {
        name: 'chipes',
        wheels: 5,
        doors: 4,
        isStarted: true,
        hp: 195,
    },
}

function getCar(carsObj, carName) {
    let carToFind = {};
    for (const item of Object.keys(cars)) {
        if (carName == item) {
            carToFind = Object.assign(carToFind, carsObj[item])
        }
    }
    if (Object.keys(carToFind).length) {
        console.log(carToFind);
    } else {
        console.log('Машина не найдена');
    }
}


getCar(cars, 'sipup');