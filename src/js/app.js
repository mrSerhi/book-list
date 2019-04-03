import BookUI from "./bookUI";
import Book from "./book";
import { validFields, clearInputFields } from "./validation";
import { Elements } from "./elements";
import uuid from "uuid";
import Storage from "./storage";
import { capitalize } from "./utilitis/utilit";

// CONTROLS
// display books when page is loaded
document.addEventListener("DOMContentLoaded", BookUI.displayBooks);

// form submiting
function controlSubmiting(e) {
  e.preventDefault();
  // get the form fields value
  const data = {
    id: uuid(),
    title: Elements.bookFormTitle.value,
    author: Elements.bookFormAuthor.value,
    isbn: +Elements.bookFormIsbn.value
  };
  // validation
  const errorMessages = validFields(data);
  if (!errorMessages) {
    const book = new Book({ ...data });
    // add the new book to the UI
    BookUI.addBookToList(book);

    // add the new book to the storage
    Storage.setBook(book);

    // show success message
    BookUI.displayProcessMessage(
      `Book "${capitalize(book.title)}" has been added!`,
      "success",
      "zoomIn",
      "zoomOut"
    );

    // clear input fields
    clearInputFields();
  }
  // display error messages
  BookUI.displayProcessMessage(
    errorMessages,
    "danger",
    "fadeIn",
    "fadeOutRight"
  );
}
Elements.bookForm.addEventListener("submit", controlSubmiting);

// deleting book from the table
function controlDeletingBook(e) {
  e.preventDefault();

  const delButton = e.target.closest("a"); // select delete btn
  const bookTitle =
    delButton.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.textContent;

  if (delButton) {
    // remove book from UI
    BookUI.removeBook(delButton);

    // remove book from localStorage
    Storage.removeBook(delButton);

    // Show deleted process message
    BookUI.displayProcessMessage(
      `Book "${bookTitle}" has been deleted!`,
      "warning",
      "bounceIn",
      "bounceOut"
    );
  }
}
Elements.bookList.addEventListener("click", controlDeletingBook);

// searching books
function controlSearching(e) {
  BookUI.filteringBooks(e.target.value);
}
Elements.bookSearch.addEventListener("keyup", controlSearching);
