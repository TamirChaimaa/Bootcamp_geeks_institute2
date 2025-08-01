var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookDetails = function (isbn) {
        return this.books.find(function (book) { return book.isbn === isbn; });
    };
    return Library;
}());
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        return this.books.map(function (book) { return book.title; });
    };
    return DigitalLibrary;
}(Library));
var myLibrary = new DigitalLibrary("https://mylibrary.com");
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
var bookDetails = myLibrary.getBookDetails("9780743273565");
console.log("Book details:", bookDetails);
var allTitles = myLibrary.listBooks();
console.log("All book titles:", allTitles);
console.log("Library website:", myLibrary.website);
