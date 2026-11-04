document.addEventListener("change", function (event) {
  const toggle = event.target;

  if (
    !toggle.matches(".md-nav__toggle") ||
    !toggle.checked
  ) {
    return;
  }

  const item = toggle.closest(".md-nav__item--nested");

  if (!item) {
    return;
  }

  // Cierra los submenús hermanos del mismo nivel.
  const parentList = item.parentElement;

  parentList
    .querySelectorAll(":scope > .md-nav__item--nested > .md-nav__toggle:checked")
    .forEach(function (otherToggle) {
      if (otherToggle !== toggle) {
        otherToggle.checked = false;
      }
    });
});