package com.abmv.angular.attack.service;

import java.util.Collection;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.AppUser;

public interface BookService {
	
	Book addBook(Book s);
	
	Iterable<BookES> getAllBooks();

	Collection<Book> getLibrary(AppUser id);
	
	List<Book> searchFuzzy(String text) throws Exception;
	
	List<AppUser> findAllUserHavingBook(Long id);

	List<Book> fuzzyFilter(String text, Long id) throws InterruptedException, ExecutionException;

	void removeBook(Book b);

	Book getBookById(Long id);

	Collection<Book> getLatestBooks();
}
