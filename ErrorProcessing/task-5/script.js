function sanitize(html) {
  const el = document.createElement("div");
  el.innerHTML = html;
  return el.textContent;
}

let user;

function setUser(userData) {
  user = userData;
}

function getUser() {
  return user;
}

async function getFilms() {
  const user = getUser();

  try {
    const response = await fetch("https://sb-film.skillbox.cc/films", {
      headers: {
        email: user?.email,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const isNeedAuth = data.errors.some((error) => {
        if (error.location === "headers" && error.param === "email") {
          return true;
        }
        return false;
      });

      if (isNeedAuth) {
        const err = new Error("Некорректный email");
        err.name = "AuthError";

        throw err;
      }
    }

    return data;
  } catch (error) {
    if (error.name === "AuthError") {
      throw error;
    }

    console.error(error);
  }

  return [];
}

function renderTopBar(user) {
  const el = document.createElement("div");
  el.classList.add("topbar");

  el.innerHTML = `
    <span class="topbar-logo">Фильмотека</span>
    <div class="topbar-user user">
      <div class="user-name">${sanitize(user.name)}</div>
      <div class="user-email">${sanitize(user.email)}</div>
    </div>
  `;

  return el;
}

function renderFilms(films) {
  const el = document.createElement("div");
  el.classList.add("films");

  if (films.length === 0) {
    el.innerText = "Cписок фильмов пока пуст";
    return el;
  }

  films.forEach((film) => {
    const filmEl = document.createElement("div");
    filmEl.classList.add("films-card");
    filmEl.dataset.watched = film.isWatched;

    filmEl.textContent = `${film.title} (${film.releaseYear})`;

    el.append(filmEl);
  });

  return el;
}

function renderGlobalError(message) {
  const el = document.createElement("div");

  el.innerHTML = `
    <div class="error">
      <div class="error-title">Упс... Возникла ошибка</div>
      <div class="error-message">${sanitize(message)}</div>
    </error>
  `;

  return el;
}

function renderAuthForm(props) {
  const form = document.createElement("form");
  form.classList.add("authForm");

  form.innerHTML = `
    <label for="name">Ваше имя</label>
    <input id="name" type="text" name="name" required="true" placeholder="Василий" />
    <label for="email">Эл. почта</label>
    <input id="email" type="text" name="email" required="true" placeholder="example@mail.com" />
    <button class="authForm-submit"type="submit">Войти</button>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);

    props.onSubmit(formProps);
  });

  return form;
}

function initAuth() {
  const app = document.getElementById("app");
  const errorEl = document.createElement("span");
  errorEl.classList.add("error-with-server");
  app.innerHTML = "";

  app.append(
    renderAuthForm({
      onSubmit: (user) => {
        setUser(user);
        initApp();
      },
    }),
    errorEl
  );
}

async function initApp() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  try {
    const user = getUser();
    if (!user) {
      initAuth();
      return;
    }
    const films = await getFilms();
    app.append(renderTopBar(user));
    app.append(renderFilms(films));
  } catch (error) {
    console.error(error);

    if ((error.name = "AuthError")) {
      initAuth();
      return;
    }

    app.append(renderGlobalError(error.message));
  }
}


async function pingServer() {
  const controller = new AbortController();
  const signal = controller.signal;
  const errorEl = document.querySelector(".error-with-server");
  let response;
  let isConnectionBad = false;

  setTimeout(() => {
    if (!response) {
      isConnectionBad = true;
    } else {
      errorEl.classList.remove("error-with-server--active");
    }
  }, 500);

  setTimeout(() => {
    if (!response) {
      controller.abort();
    }
  }, 1000);
  
  try {

    response = await fetch("https://sb-film.skillbox.cc/ping", {
      signal,
      method: "POST",
    });
    

    if (isConnectionBad) {
      errorEl.textContent = "Медленное соединение";
      errorEl.classList.add("error-with-server--active");
      errorEl.style.backgroundColor = "rgb(233, 226, 133)";
    }
  } catch {
    errorEl.textContent = "Соединение отсутсвует";
    errorEl.classList.add("error-with-server--active");
    errorEl.style.backgroundColor = "rgb(228, 128, 128)";
  }
}

setInterval(() => {
  pingServer();
}, 5000);

initApp();
