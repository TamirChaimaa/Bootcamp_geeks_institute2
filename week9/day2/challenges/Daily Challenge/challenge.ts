interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    protected books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.books.map(book => book.title);
    }
}


const myLibrary = new DigitalLibrary("https://mylibrary.com");

myLibrary.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genre: "Novel"
});

myLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949
});

const bookDetails = myLibrary.getBookDetails("9780743273565");
console.log("Book details:", bookDetails);

const allTitles = myLibrary.listBooks();
console.log("All book titles:", allTitles);

console.log("Library website:", myLibrary.website);
