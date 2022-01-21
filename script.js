function Book(title, author, pageCount, haveRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
}

let myLibrary = [];
const libraryDisplay = document.querySelector("#library-display");

myLibrary.push(new Book("Redwall", "Brian Jacques", 311, true));
myLibrary.push(new Book("Howl's Moving Castle", "Diana Wynne Jones", 212, true));
myLibrary.push(new Book("The Bible", "Jesus H. Christ", 666, false));
updateLibraryDisplay();

const addBookButton = document.querySelector("#button-add-book");
addBookButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
    let bookTitle = prompt("Please enter the book title:");
    let bookAuthor = prompt("Please enter the book author:");
    let bookPageCount = prompt("Please enter the page count:");
    let newBook = new Book(bookTitle, bookAuthor, bookPageCount, false);
    myLibrary.push(newBook);
    addBookToDisplay(newBook);
}

function updateLibraryDisplay() {
    myLibrary.forEach(book => {
        addBookToDisplay(book);
    });
}

function addBookToDisplay(book) {
    let bookDisplay = document.createElement("div");
    bookDisplay.classList.add("book-display");
    let titleDisplay = document.createElement("div");
    titleDisplay.classList.add("title-display");
    titleDisplay.innerHTML = book.title;
    bookDisplay.appendChild(titleDisplay);
    let authorDisplay = document.createElement("div");
    authorDisplay.classList.add("author-display");
    authorDisplay.innerHTML = book.author;
    bookDisplay.appendChild(authorDisplay);
    let pageCountDisplay = document.createElement("div");
    pageCountDisplay.classList.add("page-count-display");
    pageCountDisplay.innerHTML = book.pageCount + " pages";
    bookDisplay.appendChild(pageCountDisplay);
    let haveReadDisplay = document.createElement("div");
    haveReadDisplay.classList.add("have-read-display");
    haveReadDisplay.innerHTML = book.haveRead;
    bookDisplay.appendChild(haveReadDisplay);
    libraryDisplay.appendChild(bookDisplay);
}