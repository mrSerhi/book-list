class Book {
  constructor(data) {
    const { title, author, isbn } = data;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

export default Book;
