package com.abmv.angular.attack.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abmv.angular.attack.entities.Book;
import com.abmv.angular.attack.repository.BookRepository;
import com.abmv.angular.attack.service.BookService;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	BookRepository bookRep;
	
	@Override
	public Book addBook(Book s) {
		return bookRep.save(s);
	}

	@Override
	public Iterable<Book> getAllBooks() {
		return bookRep.findAll();
	}

}
