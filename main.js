import Library from './domain/library.js';

const libraryName = document.getElementById('library-name');
const inpTotalBooks = document.getElementById('inp-total-books');
const btnAdd = document.getElementById('btn-add');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');
const inpPages = document.getElementById('inp-pages');

const myLibrary = new Library('Papiros');
libraryName.innerHTML = myLibrary.getName();

function updateTotalBooks() {
  inpTotalBooks.value = myLibrary.totalBooks();
}

function updateInventory() {
  const emptyBookList = document.getElementById('empty-book-list');
  const bookListContainer = document.getElementById('book-list-container');
  const bookList = document.getElementById('book-list');

  emptyBookList.classList.add('d-none');
  bookListContainer.classList.remove('d-none');

  const addedBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
  let newListElement = document.createElement('li');
  newListElement.classList.add('list-group-item');
  newListElement.innerText = addedBook.toString();
  bookList.appendChild(newListElement);
}

btnAdd.addEventListener('click', () => {
  const bookErrorContainer = document.getElementById('add-book-error');
  const bookError = document.getElementById('add-book-error-msg');
  try {
    myLibrary.addBook(inpTitle.value, inpAuthor.value, parseInt(inpPages.value));
    clearInputs();
    bookErrorContainer.classList.add('d-none');
    updateInventory();
    updateTotalBooks();
  }
  catch (error) {
    bookErrorContainer.classList.remove('d-none');
    bookError.innerText = error;
  }
});

function clearInputs() {
  inpTitle.value = '';
  inpAuthor.value = '';
  inpPages.value = '';
}

updateTotalBooks();

// import Library from './domain/library.js';

// const libraryName = document.getElementById('library-name');
// const inpTotalBooks = document.getElementById('inp-total-books');
// const btnAdd = document.getElementById('btn-add');
// const inpTitle = document.getElementById('inp-title');
// const inpAuthor = document.getElementById('inp-author');
// const inpPages = document.getElementById('inp-pages');
// const inpWords = document.getElementById('inp-words');
// const bookListContainer = document.getElementById('book-list-container');
// const emptyBookList = document.getElementById('empty-book-list');
// const bookList = document.getElementById('book-list');
// const addBookErrorContainer = document.getElementById('add-book-error');
// const addBookErrorMsg = document.getElementById('add-book-error-msg');

// const myLibrary = new Library('Papiros');
// libraryName.innerHTML = myLibrary.getName();

// function updateTotalBooks() {
//   inpTotalBooks.value = myLibrary.totalBooks();
// }

// function updateInventory() {
//   emptyBookList.classList.add('d-none');
//   bookListContainer.classList.remove('d-none');

//   const addedBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
//   let newListElement = document.createElement('li');
//   newListElement.classList.add('list-group-item');
//   newListElement.innerText = addedBook.toString();
//   bookList.appendChild(newListElement);
// }

// btnAdd.addEventListener('click', () => {
//   try {
//     const title = inpTitle.value.trim();
//     const author = inpAuthor.value.trim();
//     const pages = parseInt(inpPages.value, 10);
//     const words = parseInt(inpWords.value, 10);

//     // Validate inputs
//     if (isNaN(pages) || pages <= 0) {
//       throw new Error('El número de páginas debe ser un número positivo.');
//     }
//     if (isNaN(words) || words < 0) {
//       throw new Error('El número de palabras debe ser un número no negativo.');
//     }

//     myLibrary.addBook(title, author, pages, words);
//     clearInputs();
//     addBookErrorContainer.classList.add('d-none');
//     updateInventory();
//     updateTotalBooks();
//   } catch (error) {
//     addBookErrorContainer.classList.remove('d-none');
//     addBookErrorMsg.innerText = error.message;
//   }
// });

// function clearInputs() {
//   inpTitle.value = '';
//   inpAuthor.value = '';
//   inpPages.value = '';
//   inpWords.value = '';
// }

// updateTotalBooks();
