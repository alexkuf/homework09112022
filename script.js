class Library {
    constructor() {
        this.books = [];
        this.user = [];
    }
    print() {
        let results = [];
        this.books.forEach(book => {
            if (book.user === null) {
                results.push(`$${book.name}is not borrowed.`)
            } else {
                results.push(`${book.name} is borrowed by ${book.user.name}; total: ${book.total()}.`)
            }
        });
        console.log(results);
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.user = null;
    }
}

class NonBorrowable {
    constructor(name) {
        this.name = name;
        this.isBorrowable = false;
        this.user = null;
    }
    borrowed() {
        alert(`${this.name} cannot be borrowed`);
    }
}

class Borrowable extends NonBorrowable {
    constructor(name, pricePerDay) {
        super(name);
        this.isBorrowable = true;
        this.pricePerDay = pricePerDay;
    }
    borrow(user, countOfDays) {
        if (user == null) {
            alert('invalid user');
            return;
        }

        if (this.user !== null) {
            alert('This book has already been borrowed.')
            return;
        }
        this.user = this.user;
        this.countOfDays = countOfDays;
    }
    returnBook() {
        this.user = null;
        this.countOfDays = null;
    }
    total() {
        return this.pricePerDay * this.countOfDays
    }
}

let library = new Library();
let hp1 = new Borrowable("HPl", 1);
library.books.push(hp1);
library.books.push(new Borrowable('HP2', 2));
library.books.push(new Borrowable('HP3', 3));
library.books.push(new Borrowable('HP4', 4));

let myNewBook = new NonBorrowable('Book3', 10);
library.books.push(myNewBook)
library.books.push(new NonBorrowable('fantastic', 30));
hp1.borrow(new User("eli"), 5);
library.print();