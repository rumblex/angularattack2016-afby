package com.abmv.angular.attack.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.AppUser;
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
	public Collection<Book> getLibrary(AppUser id) {
		return bookRep.findByOwner(id);
	}

	@Override
	public List<Book> searchFuzzy(String text) throws Exception {
		List<BookES> fuzzyFilter = libEs.fuzzyFilter(text);
		List<Book> lib=new ArrayList<>();
		
		fuzzyFilter.forEach(e->lib.add(covertToBook(e)));
		
		return lib;
	}

	@Override
	public List<AppUser> findAllUserHavingBook(Long id) {
		Collection<Book> findByTitle = bookRep.findByTitle(bookRep.findOne(id).getTitle());
		List<AppUser> liU=new ArrayList<>();
		findByTitle.forEach(e->{
			liU.add(e.getOwner());
		});
		return liU;
	}
	
	@Override
	public List<Book> fuzzyFilter(String text,Long id) throws InterruptedException, ExecutionException{
		
		List<BookES> fuzzyFilter = libEs.fuzzyFilter(text,	 id);;
		List<Book> lib=new ArrayList<>();
		
		fuzzyFilter.forEach(e->lib.add(covertToBook(e)));
		
		return lib;
	}

	@Override
	public void removeBook(Book b) {
		bookRep.delete(b);
		libEs.delete(LibraryUtil.ConvertToESBook(b));
	}

	@Override
	public Book getBookById(Long id) {
		return bookRep.findOne(id);
	}

	@Override
	public Collection<Book> getLatestBooks() {
		return bookRep.findAllByOrderByBookIdDesc();
	}
	
	
	private Book covertToBook(BookES be){
		return bookRep.findOne(be.getId());
	}
	
	
}
