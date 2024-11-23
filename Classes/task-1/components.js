export function getWrapEl(title, tag) {
  const cardWrapEl = document.createElement("div");
  cardWrapEl.classList.add("card__info-wrapper");
  const tagEl = tag;
  const titleEl = title;

  cardWrapEl.append(tagEl, titleEl);
  return cardWrapEl;
}

export function getTagEl(tag) {
  const tagEl = document.createElement("span");
  tagEl.classList.add("card__tag");
  tagEl.textContent = tag;

  return tagEl;
}
