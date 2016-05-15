package com.abmv.angular.attack.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.User;
import com.abmv.angular.attack.repository.es.LibraryBookRepositoryES;
import com.abmv.angular.attack.repository.sql.BookRepository;
import com.abmv.angular.attack.service.BookService;
import com.abmv.angular.attack.util.LibraryUtil;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	BookRepository bookRep;
	
	@Autowired
	LibraryBookRepositoryES libEs;
	
	@Override
	public Book addBook(Book s) {
		Book book = bookRep.save(s);
		BookES bes=LibraryUtil.ConvertToESBook(book);
		bes=libEs.save(bes);
		return book;
	}

	@Override
	public Iterable<BookES> getAllBooks(){
		return libEs.findAll();
	}

	@Override
	public Collection<Book> getLibrary(User id) {
		return bookRep.findByOwner(id);
	}

	@Override
	public List<BookES> searchFuzzy(String text) throws Exception {
		return libEs.fuzzyFilter(text);
	}

	@Override
	public List<User> findAllUserHavingBook(Long id) {
		Collection<Book> findByTitle = bookRep.findByTitle(bookRep.findOne(id).getTitle());
		List<User> liU=new ArrayList<>();
		findByTitle.forEach(e->{
			liU.add(e.getOwner());
		});
		return liU;
	}
	
	@Override
	public List<BookES> fuzzyFilter(String text,Long id) throws InterruptedException, ExecutionException{
		return libEs.fuzzyFilter(text,	 id);
	}
	
	
}
