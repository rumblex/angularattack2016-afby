package com.abmv.angular.attack.service;

import java.util.Collection;
import java.util.List;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.User;

public interface BookService {
	
	Book addBook(Book s);
	
	Iterable<BookES> getAllBooks();

	Collection<Book> getLibrary(User id);
	
	List<BookES> searchFuzzy(String text) throws Exception;
	
	List<User> findAllUserHavingBook(Long id);
}
