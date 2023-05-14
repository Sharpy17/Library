const bookbtn = document.querySelector(".newbook");
const form = document.querySelector("form");
const submit = document.querySelector(".submit");
const cards = document.querySelector('.book-cards')

let myLibrary = [];
let i = 0;

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-style');
    cards.appendChild(bookCard);
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('p');
    let removebtn = document.createElement('button');
    
    title.textContent = `Title: ${myLibrary[i].title}`;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `Pages: ${myLibrary[i].numberOfPages}`;
    read.textContent = `I read it: ${myLibrary[i].read}`;
    bookCard.append(title, author, pages, read);
  }
}

bookbtn.addEventListener("click", () => {
  form.classList.add("visible");
  cards.classList.add('invisible');
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.getElementById("name");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = $("#read").prop("checked");
  myLibrary[i] = new Book(title.value, author.value, pages.value, read);
  i++;
  form.classList.remove("visible");
  cards.classList.remove('invisible');
  console.log(myLibrary);
  displayBooks();
});

