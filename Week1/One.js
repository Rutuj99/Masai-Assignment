const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (
      typeof book !== "object" ||
      !book.title ||
      !book.author ||
      typeof book.year !== "number"
    ) {
      console.log("Book information is incomplete or invalid.");
      return;
    }

    if (this.findBookByTitle(book.title)) {
      console.log(`Book titled "${book.title}" already exists.`);
      return;
    }

    this.books.push(book);
    console.log(`Book titled "${book.title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Removed book titled "${removed.title}".`);
    } else {
      console.log("Book not found.");
    }
  }
};

library.addBook({ author: "George Orwell", year: 1949 });
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
library.removeBook("The Hobbit");
library.removeBook("Unknown Book");

console.log(`Total books in library: ${library.books.length}`);
console.log(library.books);
