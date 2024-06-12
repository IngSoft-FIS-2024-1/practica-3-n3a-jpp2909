class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages, words) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    if (words != undefined) {
      this.setWords(words);
    }
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error('El título debe ser una cadena de caracteres.');
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error('El título no puede estar vacío.');
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error('El autor debe ser una cadena de caracteres.')
    }
    author = author.trim();
    if (author.length === 0) {
      author = "Anónimo";
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error('El número de páginas debe ser un número.')
    }
    if (pages < 1) {
      throw new Error('El número de páginas debe ser al menos 1.')
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords() {
    if (typeof (words) !== 'number' || isNaN(words)) {
      throw new Error('El número de palabras debe ser un número.');
    }
    if (words < 0) {
      throw new Error('El número de palabras no puede ser negativo.');
    }
    words = Math.trunc(words);
    this.#words = words;
  }

  wordsPerPage() {
    if (this.#words !== undefined && this.#pages > 0) {
      return this.#words / this.#pages;
    }
    return undefined;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages}` + 
    (this.#words !== undefined ? ` Palabras: ${this.#words}` : '');
  }
}

export default Book;
