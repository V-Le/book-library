let body = document.querySelector('body');

let myLibrary = [];

//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  myLibrary.push(this);
}

//Book variables
const bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'Not read');
const bookTwo = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '309 pages', 'Not read');

//Creating inital table
const tableOne = document.createElement('table');
tableOne.style.border = '1px black solid';
tableOne.classList.add('tableMain');
body.appendChild(tableOne);

const tableOneHead = document.createElement('thead');
tableOne.appendChild(tableOneHead);

const tableOneHeadTR = document.createElement('tr');
tableOneHeadTR.innerHTML = `<th>Title</th>
                            <th>Author</th>
                            <th>Pages</th>
                            <th>Read?</th>`
tableOneHead.appendChild(tableOneHeadTR);
const tableOneBody = document.createElement('tbody');
tableOne.appendChild(tableOneBody);

function appendLibrary() { 
  myLibrary.forEach(function(lib) {
    const tableOneTR = document.createElement('tr');
    tableOneTR.innerHTML = `<td>${lib.title}</td>
                            <td>${lib.author}</td>
                            <td>${lib.pages}</td>
                            <td>${lib.read}</td>`
    tableOneTR.classList.add('tRow');
    tableOneBody.appendChild(tableOneTR);
  })
}

function addBookToLibrary(title, author, pages, read) {
  const addBook = new Book(title, author, pages, read);
  createTable();
}

function createTable() {
  tableOneBody.innerHTML = '';
  appendLibrary();
};

createTable();

