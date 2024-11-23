let cars = {
    dindong: {
        name: 'dindong-vaez',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 135,
    },
    sipup: {
        name: 'sipup-sanun',
        wheels: 6,
        doors: 5,
        isStarted: true,
        hp: 200,
    },
    huwong: {
        name: 'huwong-wiwi',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 185,
    },
    chipes: {
        name: 'chipes-jiklew',
        wheels: 5,
        doors: 4,
        isStarted: true,
        hp: 195,
    },
}

function showNames (carObj) {
    Object.values(carObj).forEach(car => {
        console.log(car.name);
    });
}

showNames(cars)