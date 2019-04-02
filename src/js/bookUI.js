import { Elements } from "./elements";
import { capitalize } from "./utilitis/utilit";
import Storage from "./storage";

// class for working with clients UI
class BookUI {
  static displayBooks() {
    // geting books from localStorage
    const storedBooks = Storage.getBooks();

    storedBooks.forEach(book => BookUI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    const { id, title, author, isbn } = book;
    row.setAttribute("id", id);
    row.innerHTML = `
      <td>${capitalize(title)}</td>
      <td>${capitalize(author)}</td>
      <td>${isbn}</td>
      <td>
        <a href="#!" class="btn btn-danger btn-sm delete-book">
          <i class="fas fa-trash-alt"></i>
        </a>
      </td>
    `;

    list.appendChild(row);
  }

  static displayProcessMessage(errors, className, animStartName, AnimEndName) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    const style = {
      fontSize: "1rem",
      lineHeight: 1.3,
      fontStyle: "italic"
    };
    Object.assign(div.style, style);

    if (errors) {
      div.classList.add("animated", animStartName);
      if (Array.isArray(errors)) {
        div.textContent = errors.join(" ");
      } else {
        div.textContent = errors;
      }
      Elements.bookForm.insertAdjacentElement("beforebegin", div);
      setTimeout(() => {
        div.classList.remove("animated", animStartName);
        div.classList.add("animated", AnimEndName);
        setTimeout(() => {
          div.remove();
        }, 1000);
      }, 3000);
    }
  }

  static removeBook(el) {
    const parent = el.parentElement.parentElement;

    if (el.classList.contains("delete-book")) parent.remove();
  }
}

export default BookUI;
