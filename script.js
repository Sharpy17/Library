const bookbtn = document.querySelector(".newbook");

let myLibrary = [];

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(input) {
  myLibrary.push(input);
}

bookbtn.addEventListener("click", () => {
    prompt('title')
});
