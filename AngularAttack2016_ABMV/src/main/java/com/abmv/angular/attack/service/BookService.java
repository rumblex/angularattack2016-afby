package com.abmv.angular.attack.service;

import java.util.Collection;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.User;

public interface BookService {
	
	Book addBook(Book s);
	
	Iterable<BookES> getAllBooks() throws Exception;

	Collection<Book> getLibrary(User id);
}
