import { jsonParse, jsonStringify } from "./utilitis/utilit";

// class for working with localStorage
class Storage {
  // get books
  static getBooks() {
    let books;
    // check on books in localStorage
    if (localStorage.getItem("books") !== null) {
      books = jsonParse(localStorage.getItem("books"));
    } else {
      books = [];
    }
    return books;
  }

  // set book
  static setBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    // set to localStorage
    localStorage.setItem("books", jsonStringify(books));
  }

  // delete book
  static removeBook(el) {
    const parentID = el.parentElement.parentElement.id;

    const books = jsonParse(localStorage.getItem("books"));
    const index = books.findIndex(b => b.id === parentID);
    books.splice(index, 1);

    localStorage.setItem("books", jsonStringify(books));
  }
}

export default Storage;
