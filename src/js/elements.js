function findElement(element) {
  return document.querySelector(element);
}

export const Elements = {
  bookForm: findElement("#book-form"),
  bookFormTitle: findElement("#book-title"),
  bookFormAuthor: findElement("#book-author"),
  bookFormIsbn: findElement("#book-isbn")
};
