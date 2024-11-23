import { getLoader } from "./components.js";

export default async function navigate(place, item) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const loaderEl = getLoader();
  app.append(loaderEl);

  switch (place) {
    case "Добавить запись":
      const createAddItem = await import("./createAddItem.js");
      createAddItem.default(app);
      loaderEl.remove()
      break;
    case "Склад":
      const createRepository = await import("./createRepository.js");
      createRepository.default(app);
      loaderEl.remove()
      break;
    case "Редактировать запись":
      const createEditItem = await import("./createEditItem.js");
      createEditItem.default(app, item);
      loaderEl.remove()
      break;
  }
}
