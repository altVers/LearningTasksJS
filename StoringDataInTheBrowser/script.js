document.querySelector('#film-form').addEventListener('submit', function (e) {
    if (validate.isValid) {  // Если валидация пройдена, добавить фильм и перезагрузить страницу
        addFilm()
        location.reload()  // Страницу перезагружаю, потому что иначе после очистки полей
                           // валидатор пытается проверить пусыте поля и ругается.
                           // Может можно как то настроить JustValidate, чтобы он 
                           // проверял поля только после попытки отправки формы?
    }     
});

function addFilm() {
    const titleEl = document.querySelector('#title').value;
    const genreEl = document.querySelector('#genre').value;
    const releaseYearEl = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;

    const film = {
        titleEl,
        genreEl,
        releaseYearEl,
        isWatched,
    }
                                                 
    addToLocalStorage(film)             // Создаю объект фильма и отправляю его в локалку
}

function addToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film)
    localStorage.setItem('films', JSON.stringify(films))
    renderTable()                                        // После обновоения локалки рендерю таблицу под формой
}

function renderTable() {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    const tBodyEl = document.querySelector('#film-tbody');

    tBodyEl.innerHTML = ""

    films.forEach(film => {
        const trEl = document.createElement('tr');
        trEl.innerHTML = `
        <td>${film.titleEl}</td>
        <td>${film.genreEl}</td>
        <td>${film.releaseYearEl}</td>
        <td>${film.isWatched ? 'Да' : 'Нет'}</td>
        `
        tBodyEl.appendChild(trEl)
                                                          
        const btnsTd = document.createElement('td');            // Добавляю кнопки Редактировать и Удалить
        const deleteFilmButton = document.createElement("button");
        const editFilmButton = document.createElement("button");
        deleteFilmButton.textContent = "Удалить";
        editFilmButton.textContent = "Редактировать"
        btnsTd.append(editFilmButton, deleteFilmButton)
        trEl.append(btnsTd);

        deleteFilmButton.addEventListener('click', function () {   // Прописываю лоигику кнопки удаления фильма
            
            // Удаление из локалки
            const films = JSON.parse(localStorage.getItem('films'))
            const filteredFilms = films.filter((el) => el.titleEl != film.titleEl)
            localStorage.setItem('films', JSON.stringify(filteredFilms))

            // Удаление из html
            deleteFilmButton.parentNode.parentNode.remove()
        });

        editFilmButton.addEventListener('click', function () {   // Прописываю логику кнопки редактирования фильма

            // Заполнения полей формы данными из строки таблцы, в которой была нажата кнопка
            document.querySelector('#title').value = film.titleEl;
            document.querySelector('#genre').value = film.genreEl;
            document.querySelector('#releaseYear').value = film.releaseYearEl;
            document.querySelector('#isWatched').checked = film.isWatched;

            // Замена кнопок в форме на режим редактирования
            document.querySelector('.film-form__btn').style = 'display: none';
            document.querySelector('.film-form__btn--update').style = 'display: block';
            document.querySelector('.film-form__btn--cancel').style = 'display: block';

            // Присваиваю значение тайтла строки, которую редактируем
            filmToChange = document.querySelector('#title').value = film.titleEl; 
        });
    });
}

let filmToChange;

document.querySelector('.film-form__btn--update').addEventListener('click', function (e) { // Логика обновления фильма
    e.preventDefault()
    const films = JSON.parse(localStorage.getItem('films'))
    const titleEl = document.querySelector('#title').value;
    const genreEl = document.querySelector('#genre').value;
    const releaseYearEl = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;

    const film = {                                                      // Создаю объект фильма из полей формы, которые были
        titleEl,                                                        // заполнены после нажатия кнопки «Редактировать»
        genreEl,
        releaseYearEl,
        isWatched,
    }

    films.forEach(el => {                                               // Нахожу в локалке мне нужный объект с фильмом и
        if (filmToChange == el.titleEl) {                               // мержу их вместе, тем самым переписывая исходный 
            Object.assign(el, film)                                     // объект
        }
    });

    localStorage.setItem('films', JSON.stringify(films))                // Возращаю в локалку измененый объект фильма

    renderTable()                                                       // После обновления повторно рендерю таблицу и 
    resetForm()                                                         // очищаю поля формы
});

document.querySelector('.film-form__btn--cancel').addEventListener('click', function(e) { // Логика кнопки «Отменить редактирование»
    e.preventDefault()                                                                    // Просто очищаю поля формы
    resetForm()
});

function resetForm() {                                                                     // Логика сброса формы
    document.querySelector('#film-form').reset()                                           // Очищаю поля формы

    document.querySelector('.film-form__btn').style = 'display: block';                    // Убеждаюсь, что кнопки формы не 
    document.querySelector('.film-form__btn--update').style = 'display: none';             // в режиме редактирования
    document.querySelector('.film-form__btn--cancel').style = 'display: none';
}


document.querySelector('#sort-table-btn').addEventListener('click', function (e) {     // Логика кнопки «Сортировать»
    e.preventDefault()
    const selectElValue = document.querySelector('#sort-table__select').value;        // Получаю значение селектора
    const films = JSON.parse(localStorage.getItem('films')) || [];                    // Достаю фильмы из локалки
    localStorage.setItem('films', JSON.stringify(sortArr(films, selectElValue)))      // Возвращаю в локалку сортированный массив
    renderTable()                                                                     // Повторно рендерю таблицу
});

function sortArr(array, rule) {                             // Логика сортировки
    let sortedArr = array                                   // Создаю массив, куда изначально падает массив из локалки
    switch (rule) {                                         // Дальше через switch проверяю разные варианты сортировки: они
        case 'titleEl':                                     // меняются в зависимости от того, что передали в rule, а в rule 
            sortedArr = array.sort(function (a, b) {        // мы передаем значение селекта,
                if (a.titleEl > b.titleEl) {                // которые соотвествуют ключам в объекте film
                    return 1;
                }
                if (a.titleEl < b.titleEl) {
                    return -1;
                }
                return 0;
            })
            break;
        case 'genreEl':
            sortedArr = array.sort(function (a, b) {
                if (a.genreEl > b.genreEl) {
                    return 1;
                }
                if (a.genreEl < b.genreEl) {
                    return -1;
                }
                return 0;
            })
            break
        case 'releaseYearEl':
            sortedArr = array.sort(function (a, b) {
                if (a.releaseYearEl > b.releaseYearEl) {
                    return -1;
                }
                if (a.releaseYearEl < b.releaseYearEl) {
                    return 1;
                }
                return 0;
            })
            break;
    }
    return sortedArr;                                               // Возвращаю сортированный массив
}

const validate = new JustValidate('#film-form')                     // Логика работы валидатора justValidate

validate.addField('#title', [
    {
        rule: 'required',
        errorMessage: 'Введите название фильма'
    },
]);
validate.addField('#genre', [
    {
        rule: 'required',
        errorMessage: 'Введите жанр фильма'
    },
]);
validate.addField('#releaseYear', [
    {
        rule: 'required',
        errorMessage: 'Введите год выпуска фильма'
    },
]);
 
renderTable()                                                  // Первый рендер таблицы со значениями из локалки