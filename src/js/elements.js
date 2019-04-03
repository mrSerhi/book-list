function findElement(element) {
  return document.querySelector(element);
}

function findElements(elements) {
  return document.querySelectorAll(elements);
}

export const Elements = {
  bookForm: findElement("#book-form"),
  bookFormTitle: findElement("#book-title"),
  bookFormAuthor: findElement("#book-author"),
  bookFormIsbn: findElement("#book-isbn"),
  bookAppError: findElement(".error-message"),
  bookList: findElement("#book-list"),
  bookSubmit: findElement("#book-sumbit"),
  bookSearch: findElement("#book-search")
};
