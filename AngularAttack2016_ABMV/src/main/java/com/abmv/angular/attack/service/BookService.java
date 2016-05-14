package com.abmv.angular.attack.service;

import com.abmv.angular.attack.entities.Book;

public interface BookService {
	
	Book addBook(Book s);
	
	Iterable<Book> getAllBooks();
	
}
