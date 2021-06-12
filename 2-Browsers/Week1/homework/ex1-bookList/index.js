//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  // your code goes in here, return the ul element
  const ul = document.createElement('ul');
  ul.style.display = 'flex';

  books.forEach((obj) => {
    const pEl = document.createElement('p');
    pEl.textContent = `${obj.title} - ${obj.author}`;
    pEl.style.padding = '20px';
    pEl.style.textAlign = 'center';

    const liEL = document.createElement('li');
    liEL.style.listStyle = 'none';
    liEL.style.margin = '50px';
    liEL.appendChild(pEl);

    const imgEl = document.createElement('img');
    imgEl.style.width = '300px';
    imgEl.style.marginLeft = '10px';

    liEL.appendChild(imgEl);
    if (obj.title === 'The Design of Everyday Things') {
      imgEl.src = 'assets/the_design_of_everyday_things.jpg';
      imgEl.alt = ' image of book cover the design of everyday things ';
    } else if (obj.title === 'The Most Human Human') {
      imgEl.src = 'assets/the_most_human_human.jpg';
      imgEl.alt = 'image of book cover the most human human ';
    } else {
      imgEl.src = 'assets/the_pragmatic_programmer.jpg';
      imgEl.alt = 'image of book cover The Pragmatic Programmer';
    }

    if (obj.alreadyRead === true) {
      liEL.style.backgroundColor = 'green';
    } else {
      liEL.style.backgroundColor = 'red';
    }

    ul.appendChild(liEL);
  });

  return ul;
}

const ulElement = createBookList(myBooks);
const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

document.querySelector('#bookList').appendChild(ulElement);
