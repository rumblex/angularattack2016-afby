package com.abmv.angular.attack.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.User;
import com.abmv.angular.attack.repository.es.BookEsRepositoryDefault;
import com.abmv.angular.attack.repository.es.LibraryBookRepositoryES;
import com.abmv.angular.attack.repository.sql.BookRepository;
import com.abmv.angular.attack.service.BookService;
import com.abmv.angular.attack.util.LibraryUtil;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	BookRepository bookRep;
	
	@Autowired
	BookEsRepositoryDefault bookEsRepo;
	
	@Autowired
	LibraryBookRepositoryES libEs;
	
	/* (non-Javadoc)
	 * @see com.abmv.angular.attack.service.BookService#addBook(com.abmv.angular.attack.entities.sql.Book)
	 */
	@Override
	public Book addBook(Book s) {
		Book book = bookRep.save(s);
		BookES bes=LibraryUtil.ConvertToESBook(book);
		bes=bookEsRepo.save(bes);
		return book;
	}

	@Override
	public Iterable<BookES> getAllBooks() throws Exception {
		libEs.filter();
		return bookEsRepo.findAll();
	}

	@Override
	public Collection<Book> getLibrary(User id) {
		return bookRep.findByOwner(id);
	}
}
