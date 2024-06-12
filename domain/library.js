import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  #wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== "string") {
      throw new Error('El nombre debe ser una cadena de caracteres.')
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error("El nombre no puede estar vacío.")
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    let total = 0;
    this.#inventory.forEach(book => {
      if (book.getWords()) {
        total += book.getWords();
      }
    });
    return total;
  }
}

export default Library;
