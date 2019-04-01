// To Do
/*
Classes:
  1.Create Book class (represents a book)
  2.Create UI Class: Handle UI tasks
  3.Create Store Class: Handle localStorage 
Events:
  1.DISPLAY BOOKS
  2.ADD A BOOK
  3.DELETE A BOOK
*/
import BookUI from "./bookUI";
import Book from "./book";
import { Elements } from "./elements";

// Control
document.addEventListener("DOMContentLoaded", BookUI.displayBooks);

// form submiting
function controlSubmiting(e) {
  e.preventDefault();
  // get the form fields value
  const data = {
    title: Elements.bookFormTitle.value,
    author: Elements.bookFormAuthor.value,
    isbn: Elements.bookFormIsbn.value
  };
  const book = new Book({ ...data });
  // add the new book to the UI
  BookUI.addBookToList(book);
  // clear input fields
  clearInputFields();
}
function clearInputFields() {
  Elements.bookFormTitle.value = "";
  Elements.bookFormAuthor.value = "";
  Elements.bookFormIsbn.value = "";
}
Elements.bookForm.addEventListener("submit", controlSubmiting);
