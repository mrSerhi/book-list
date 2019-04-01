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
        <a href="#!" class="btn btn-danger btn-sm">X</a>
      </td>
    `;

    list.appendChild(row);
  }
}

export default BookUI;
