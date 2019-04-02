class Book {
  constructor(data) {
    const { id, title, author, isbn } = data;
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

export default Book;
