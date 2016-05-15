"use strict";
var Book = (function () {
    function Book(obj) {
        this.bookId = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.authorName = obj && obj.authorName || null;
        this.sharable = obj && obj.sharable || null;
        this.rating = obj && obj.rating || null;
        this.genres = obj && obj.genres || null;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map