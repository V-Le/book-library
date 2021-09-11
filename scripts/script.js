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

//Creating initial table
const tableMain = document.createElement('table');
tableMain.style.border = '1px black solid';
tableMain.classList.add('tableMain');
body.appendChild(tableMain);

const tableHeader = document.createElement('thead');
tableMain.appendChild(tableHeader);

const tableHeaderRow = document.createElement('tr');
tableHeaderRow.innerHTML = `<th>Title</th>
                                <th>Author</th>
                                <th>Pages</th>
                                <th>Read?</th>`
tableHeader.appendChild(tableHeaderRow);
const tableBody = document.createElement('tbody');
tableMain.appendChild(tableBody);

function appendBookToLibrary() { 
  myLibrary.forEach(function(book) {
    const tableBodyRow = document.createElement('tr');
    tableBodyRow.innerHTML = `<td><button class='deleteBtn'>-</button>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.pages}</td>
                            <td><button class='readBtn'>&nbsp</button>
                            <span class='readTog'>${book.read}</span></td>`
    tableBody.appendChild(tableBodyRow);
  })
}

//Form to add books to library
const submitBook = document.querySelector('#submitBook');
submitBook.addEventListener('click', submitBookToLibrary);

function submitBookToLibrary() {
  let title = document.querySelector('#bookName').value;
  let author = document.querySelector('#authorName').value;
  let pages = document.querySelector('#bookPages').value;
  let read = '';
  
  let readCheckBox = document.querySelector('#readBook');
  if(readCheckBox.checked == true){
    read = 'Read';
  } else {
    read = "Not read";
  }
  addBookToLibrary(title, author, pages, read);
}

//Button to delete all books from library
const btnDelete = document.querySelector('#ButtonDelete');
btnDelete.addEventListener('click', deleteAllBooksFromLibrary);


function addBookToLibrary(title, author, pages, read) {
  const addBook = new Book(title, author, pages, read);
  createLibraryTable();
}

function btnReadToggle() {
    const btnToggle = document.querySelectorAll('.readBtn');
    
      for(let i=0; i <= btnToggle.length-1; i++) {
        btnToggle[i].addEventListener('click', function() {
          if(myLibrary[i].read === 'Not read') {
            myLibrary[i].read = 'Read'
            createLibraryTable()
            } else {
            myLibrary[i].read = 'Not read'
            createLibraryTable()
          }
      });
    }
  }

function deleteBookFromLibrary() {
const deleteBtn = document.querySelectorAll('.deleteBtn');

    for(let i=0; i <= deleteBtn.length-1; i++) {
    deleteBtn[i].addEventListener('click', function() {
    myLibrary.splice(i,1);
    createLibraryTable();
    });
    }
};

function deleteAllBooksFromLibrary() {
    if(myLibrary.length > 0) {
      myLibrary = [];
      createLibraryTable();
    }
  }

function createLibraryTable() {
  tableBody.innerHTML = '';
  appendBookToLibrary();
  btnReadToggle();
  deleteBookFromLibrary();
};



createLibraryTable();

