import { BookShelf } from './lib.js';
import { DateTime } from './luxon.js';

const shelf = new BookShelf();

const bookName = document.querySelector('.book');
const authorName = document.querySelector('.author');
const add = document.querySelector('.add');

window.onload = () => {
  shelf.display();
};
const msgSpan = document.getElementById('msg');
add.addEventListener('click', () => {
  if (bookName.value === '' || authorName.value === '') {
    msgSpan.innerHTML = 'Name/Author missing!';
  } else {
    shelf.addBook({ title: bookName.value, writer: authorName.value });
    bookName.value = '';
    authorName.value = '';
    msgSpan.innerHTML = 'Book successfully added!';
  }
  msgSpan.style.display = 'block';

  setInterval(() => { msgSpan.style.display = 'none'; }, 8000);
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('.button'); // Or any other selector.

  if (target) {
    shelf.removeBook(target.id);
  }
});

const div = document.getElementById('date-time');

function time() {
  const dt = DateTime.now();
  div.textContent = `${dt.toFormat('DDDD tt')}`;
}

setInterval(time, 1000);

const links = document.querySelectorAll('.links'); /// create array of element objects
const list = document.getElementById('list');
const form = document.getElementById('form');
const contact = document.getElementById('contact');

list.classList.toggle('show');
form.classList.toggle('show');
contact.classList.toggle('show');
list.style.display = 'block';

links.forEach((link) => {
  link.addEventListener('click', () => {  
    if (link.id === 'list-link') {
      list.style.display = 'block';
      form.style.display = 'none';
      contact.style.display = 'none';
    }

    if (link.id === 'add-link') {
      list.style.display = 'none';
      form.style.display = 'block';
      contact.style.display = 'none';
    }

    if (link.id === 'contact-link') {
      list.style.display = 'none';
      form.style.display = 'none';
      contact.style.display = 'block';
    }
  });
});