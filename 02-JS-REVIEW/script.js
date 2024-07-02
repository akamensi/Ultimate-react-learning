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
    hasMovieAdaptation: false,
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

//Destructuring

// const book = getBook(2);
// book;

// /* const title = book.title
// const author = book.author */

// const {
//   title,
//   author,
//   pages,
//   publicationDate,
//   genres,
//   hasMovieAdaptation,
//   translations,
// } = book;
// console.log(author, title, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// // spread operator array
// const newGenres = [...genres, "epic fantasy"];
// newGenres;

// // spread operator object
// const updatedBook = { ...book, moviePublication: "2001-11-19", pages: 1290 };
// updatedBook;

// //string with varibal and also we can put function and affichage conditionel
// const summary = `${title}, a ${pages} pages book was written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }. the book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
// summary;

// const pagesRange = pages > 1000 ? "over 1000 pages" : "less than 1000";
// pagesRange;
// console.log(`the book has ${pagesRange} pages`);

// //Arrow Function
// //normal function
// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));

// //Arrow function with one line
// const getTitel = (str) => str.split("-")[0];
// console.log(getTitel(title));

// //Arrow function with more than one line: should write the return
// const getAuthor = (str) => {
//   return str.split("-")[0];
// };
// console.log(getAuthor(author));

// //short circuiting and logical operations
// console.log(true && "some string");
// console.log(false && "some string");
// console.log(hasMovieAdaptation && "this book has a movie");
// //falsy value ==> 0, '', null, undefined
// console.log(0 && "some string");
// console.log("jonas" && "some string");

// console.log(true || "some string");
// console.log(false || "some string");
// console.log(true || "some string");
// console.log(translations.spanish);
// const spanishTranslation = translations.spanish || "Not translated";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWorng = book.reviews.librarything.reviewsCount || "no data";
// countWorng; // because 0 is a falsy value
// const count = book.reviews.librarything.reviewsCount ?? "no data"; //"nullish coalescing operator
// count;

// //Optional Chaining (?.)
// function getTotalReviewCount(book) {
//   const goodReads = book.reviews?.goodReads?.reviewsCount ?? 0; //"nullish coalescing operator
//   const librarything = book.reviews?.librarything?.reviewsCount;
//   return goodReads + librarything;
// }
// console.log(getTotalReviewCount(book));

//map method
// function getTotalReviewCount(book) {
//   const goodReads = book.reviews?.goodReads?.reviewsCount ?? 0; //(??) nullish coalescing operator
//   const librarything = book.reviews?.librarything?.reviewsCount;
//   return goodReads + librarything;
// }

// const books = getBooks();
// books;

// const x = [1, 3, 5, 8, 9].map((el) => el * 2);
// console.log(x);

// const titles = books.map((b) => b.title);
// titles;

// const essentialData = books.map((bo) => ({
//   titel: bo.title,
//   author: bo.author,
//   reviewsCount: getTotalReviewCount(bo),
// }));
// essentialData;

// //Filter method
// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((bo) => bo.hasMovieAdaptation);
// longBooksWithMovie;

// const adventureBooks = books
//   .filter((b) => b.genres.includes("adventure"))
//   .map((boo) => boo.title);
// adventureBooks;

// //Reduce method
// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// pagesAllBooks;

// //Sort method
// const t = [3, 5, 4, 9, 7, 5, 1];
// const t2 = [5, 7, 9, 3, 6, 4];
// const sorted = t.sort((a, b) => a - b);
// const sorted2 = t2.slice().sort((c, d) => c - d); // slice take a copie
// sorted;
// t;
// sorted2;
// t2;

// const sortedByPages = books.slice().sort((x, y) => x.pages - y.pages);
// sortedByPages;

// //immutable Array
// //1/ Add
// const newBook = {
//   id: 6,
//   title: "Harry Potter and pheonix",
//   author: "J. k. Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// //2/ Delete
// const booksAfterDelete = booksAfterAdd.filter((b) => b.id !== 4);
// booksAfterDelete;

// //3/ Update
// const booksAfterUpdate = booksAfterDelete.map((bo) =>
//   bo.id === 5 ? { ...bo, pages: 12210 } : bo
// );
// booksAfterUpdate;

//Asynchronous JS => Promises

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("aka");

async function getToDo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getToDo();
console.log(todos);
console.log("aka");
