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
import { validFields, clearInputFields } from "./validation";
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
  // validation
  const errorMessages = validFields(data);
  if (!errorMessages) {
    const book = new Book({ ...data });
    // add the new book to the UI
    BookUI.addBookToList(book);

    // show success message
    BookUI.displayProcessMessage(
      "Book has been added!",
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
  BookUI.deleteBook(e.target);

  // Show deleted process message
  BookUI.displayProcessMessage(
    "Book has been deleted!",
    "warning",
    "bounceIn",
    "bounceOut"
  );
}
Elements.bookList.addEventListener("click", controlDeletingBook);
