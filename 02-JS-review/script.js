const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
///NOTE: Destructuring
const books = getBooks();

const book2 = getBook(2);
book2
// const b2Title = book2.title;
// b2Title
// const b2Author = book2.author;
// b2Author
// const { b2Title, b2Author } = book2;
// console.log(b2Author, b2Title);
// Same result as above
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book2; // Needs to have the same names as the object properties
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

///NOTE: Destructuring with Arrays (relies on the order of the element, instead
///of the property name)
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// Same result as above
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);


///NOTE: REST and SPREAD operators (...)
// REST
const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // Used to create a copy of all other genres of the book
console.log(primaryGenre, secondaryGenre, otherGenres);
// SPREAD
//const newGenres = [genres, 'epic fantasy']; // Not exactly what we wanted, it creates a bidimensional array instead of adding another to the end.
const newGenres = [...genres, 'epic fantasy']; // Creates a copy of the genres array and place the new element at the end.
//const newGenres = ['epic fantasy', ...genres]; // The new element could also
//be placed at the begining of the array.
newGenres
// SPREAD at objects
const book1 = getBook(1);
//const updatedBook = { book1, moviePublicationDate: "2001-12-19" } // Not
//exactly what we wanted, it doesn't adds a new property to the object
let updatedBook = { ...book1, moviePublicationDate: "2001-12-19" } // Creates a copy of the book1 object and adds a new property
updatedBook = { ...updatedBook, pages: 3333 } // Overwriting a property
// The overwrite could be done like that too:
// const updatedBook = { ...book1, moviePublicationDate: "2001-12-19", pages: 3333 }
updatedBook

///NOTE: Template Literals (text interpolation)
// const summary = `${title} is a book ${24 % 3 === 1}`;
const summary = `${title} is a book with ${pages} pages, written by ${author} and published in ${publicationDate.split('-')[0]}`;
summary
// Notice that it gets the properties values from the first object instantiated (book2)
// that has this properties. But we can easily pick a specific object like the
// following:
const summary2 = `${book1.title} is a book with ${book1.pages} pages, written by ${book1.author} and published in ${book1.publicationDate.split('-')[0]}`;
summary2


///NOTE: Ternaries
const pagesAmount = pages > 1000 ? 'over a thousand' : 'less than a thousand'
pagesAmount
console.log(`The book has ${!hasMovieAdaptation ? 'not' : ''} been adapted as a movie`);
console.log(`The book has ${!book1.hasMovieAdaptation ? 'not' : ''} been adapted as a movie`);

///NOTE: Arrow Functions (initially, it was planned to be used as 1 line functions)
// A traditional function, like:
// function getYear(str) {
//   return str.split('-')[0];
// }
// console.log(getYear(publicationDate))
// Can be writted as:
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

///NOTE: SORT-CIRCUITING AND LOGICAL OPERATORS: &&, ||, ??
// SORT-CIRCUITING with AND operator, doesn't look for the second parameter if
// the first is a falsy value
// falsy values: 0, '', null, undefined
console.log(true && 'Some string');
console.log(false && 'Some string');
console.log(hasMovieAdaptation && 'This book has a movie');
console.log(book1.hasMovieAdaptation && 'This book has a movie');
console.log('Victor' && 'Some string');
console.log('' && 'Some string');
console.log(0 && 'Some string');
console.log(null && 'Some string');
console.log(undefined && 'Some string');
// SORT-CIRCUITING with OR operator, does the opposite of the above
console.log(true || 'Some string');
console.log(false || 'Some string');
console.log('Victor' || 'Some string');
console.log('' || 'Some string');
console.log(0 || 'Some string');
console.log(null || 'Some string');
console.log(undefined || 'Some string');
console.log(book1.translations.spanish);
console.log(book2.translations.spanish);
console.log(book2.translations.spanish || book1.translations.spanish);
const spanishTranslation = book2.translations.spanish || 'Not translated';
spanishTranslation;
console.log(book2.reviews.librarything.reviewsCount);
const countWrong = book2.reviews.librarything.reviewsCount || 'No data';
countWrong;
// SORT-CIRCUITING with NULLISH operator, returns the second parameter when the
// first is null or undefined
console.log(true ?? 'Some string');
console.log(false ?? 'Some string');
console.log('Victor' ?? 'Some string');
console.log('' ?? 'Some string');
console.log(0 ?? 'Some string');
console.log(null ?? 'Some string');
console.log(undefined ?? 'Some string');

///NOTE: Optional Chaining
//
const book3 = getBook(3);
// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything.reviewsCount;
//   return goodreads + librarything;
// }
// console.log(getTotalReviewCount(book1));
// console.log(getTotalReviewCount(book3)); // Inducing an error, since book3
// doesn't have a defined librarything
// In order to solve this, we'll use Optional Chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book3));
// Taking advantage of the NULLISH operator
function getTotalReviewCount2(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount2(book3));
*/

/*
///NOTE: Array Methods (Map, Filter, Reduce, Sort)
// Creates a copy of the array without modifying the original one
// Map: iterates on each elements of the array while apply a function to them
console.log([1, 2, 3, 4, 5].map(el => el * 2));

function getTotalReviewCount2(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const titles = getBooks().map(el => el.title);
console.log(titles);
// const essentialData = getBooks().map(book => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });
// Even less code
const essentialData = getBooks().map(book => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount2(book),
}));
console.log(essentialData);

// Filter: return elements that match a condition
const longBooks = getBooks()
  .filter(book => book.pages >= 500)
  .filter(book => book.hasMovieAdaptation);
console.log(longBooks);
const adventureBooks = getBooks()
  .filter(book => book.genres.includes('adventure'))
  .map(book => book.title);
console.log(adventureBooks);

// Reduce: Intends to extract a single combined information from an array
const pagesAllBooks = getBooks().reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

// Sort: Used to sort the elements of an array
// It changes the original array
const arr = [3, 7, 1, 5, 9];
const sortedAsc = arr.sort((a, b) => a - b);
console.log(sortedAsc);
console.log(arr);
const sortedDes = arr.sort((a, b) => b - a);
console.log(sortedDes);
console.log(arr);
// Creating a new array using slice()
const sortedAsc2 = arr.slice().sort((a, b) => a - b);
console.log(sortedAsc2);
console.log(arr);
const sortedByPages = getBooks().slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

///NOTE: Working with immutable arrays
// 1- Add a book object to the array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling"
};
const booksAfterAdd = [...getBooks(), newBook]; // Not changing the original array
console.log(booksAfterAdd);
// 2- Delete a book object from the array
const booksAfterDelete = booksAfterAdd.filter(x => x.id != 6); // Not changing the original array
console.log(booksAfterDelete);
console.log(booksAfterAdd);
// 3- Update a book object in the array
const booksAfterUpdate = booksAfterAdd.map(x => x.id == 6 ? {...x, pages: 111} : x); // Not changing the original array
console.log(booksAfterUpdate);
console.log(booksAfterAdd);
*/

///NOTE: Asynchronous JS: Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(res => res.json())
//   .then(data => console.log(data));
// console.log("Victor"); // Confirming that the JS continue running and isn't blocked by the fetch()

///NOTE: Asynchronous JS: Async and Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  // console.log(data)
  return data;
}
const todos = await getTodos();
console.log(todos);
console.log("Victor");
