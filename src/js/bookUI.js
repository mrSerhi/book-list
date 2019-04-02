import { Elements } from "./elements";

class BookUI {
  static displayBooks() {
    // hard code. Should get books from localStorage
    const storedBooks = [
      { title: "The big bang boom", author: "Nikolas Bedarg", isbn: 33 },
      { title: "Thounder", author: "Djonatan Lolka", isbn: 12 },
      { title: "Featured things", author: "Bernadet Alinda", isbn: 50 }
    ];

    const books = storedBooks;
    books.forEach(book => BookUI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    const { title, author, isbn } = book;
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
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
      }, 2500);
    }
  }

  static deleteBook(el) {
    if (el.classList.contains("delete-book")) {
      el.parentElement.parentElement.remove();
    }
  }
}

export default BookUI;
