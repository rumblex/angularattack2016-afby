package com.abmv.angular.attack.rest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abmv.angular.attack.entities.Book;
import com.abmv.angular.attack.service.BookService;
import com.abmv.angular.attack.service.UserService;

@RestController
public class BookRestService {

	@Autowired
	BookService bookSer;
	
	@Autowired
	UserService usrSer;
	
	@RequestMapping("/addBook")
	public Book addBook(){
		Book b=new Book();
		b.setTitle("Lord Of the rings");
		b.setAuthorName("J R R Tokiens");
		b.setRating(2);
		b.setOwner(usrSer.getUserById(1l));
		b=bookSer.addBook(b);
		return b;
	}
	
	@RequestMapping("/getBooks")
	public Iterable<Book> getBooks(){
		return bookSer.getAllBooks();
	}
}
