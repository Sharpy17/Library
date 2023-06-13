const newbook = document.querySelector(".newbook");
const form = document.querySelector("form");
const submit = document.querySelector(".submit");
const cards = document.querySelector(".book-cards");

let myLibrary = [];
let i = 0;

class Book {
  constructor(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
  }

  displayBooks() {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-style");
    cards.appendChild(bookCard);
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("p");
    let removebtn = document.createElement("button");
    removebtn.classList.add("remove");
    removebtn.textContent = "Remove";
    removebtn.addEventListener('click', () => {
      removebtn.parentElement.remove();
    })
    title.textContent = `Title: ${myLibrary[i].title}`;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `Pages: ${myLibrary[i].numberOfPages}`;
    read.textContent = `I read it: ${myLibrary[i].read}`;
    bookCard.append(title, author, pages, read, removebtn);
  }
  
}


newbook.addEventListener("click", () => {
  form.classList.add("visible");
  cards.classList.add("invisible");
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.getElementById("name");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = $("#read").prop("checked");
  myLibrary[i] = new Book(title.value, author.value, pages.value, read);
  form.classList.remove("visible");
  cards.classList.remove("invisible");
  myLibrary[i].displayBooks();
  i++;
});

