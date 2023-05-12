const bookbtn = document.querySelector(".newbook");
const form = document.querySelector('form');

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
  form.classList.add('visible');
});
