package com.abmv.angular.attack.rest.services;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.Genre;
import com.abmv.angular.attack.entities.sql.User;
import com.abmv.angular.attack.service.BookService;
import com.abmv.angular.attack.service.UserService;

@RestController
@RequestMapping("/book")
public class BookRestService {

	@Autowired
	BookService bookSer;
	
	@Autowired
	UserService usrSer;
	
	@RequestMapping("/addBook")
	public Book addBook(){
		Book b=new Book();
		b.setTitle("Hobbit");
		b.setAuthorName("Peter Jackson");
		b.setRating(5);
		b.setOwner(usrSer.getUserById(1l));
		Set<Genre> g=new HashSet<>();
		g.add(Genre.Adeventure);
		g.add(Genre.Drama);
		b.setGenres(g);
		b=bookSer.addBook(b);
		
		b=new Book();
		b.setTitle("The Dark knight");
		b.setAuthorName("Chris nolan");
		b.setRating(5);
		b.setOwner(usrSer.getUserById(2l));
		g=new HashSet<>();
		g.add(Genre.Adeventure);
		g.add(Genre.ScienceFiction);
		b.setGenres(g);
		bookSer.addBook(b);

		b=new Book();
		b.setTitle("Hobbit");
		b.setAuthorName("Peter Jackson");
		b.setRating(5);
		b.setOwner(usrSer.getUserById(2l));
		g=new HashSet<>();
		g.add(Genre.Adeventure);
		g.add(Genre.Drama);
		b.setGenres(g);
		b=bookSer.addBook(b);
		
		return b;
	}
	
	@RequestMapping("/getBooks")
	public Iterable<BookES> getBooks() throws Exception{
		return bookSer.getAllBooks();
	}
	
	@RequestMapping("/getLibrary/{id}")
	public Collection<Book> getLibrary(@PathVariable Long id){
		return bookSer.getLibrary(usrSer.getUserById(id));
	}
	
	@RequestMapping("/fuzzySearch")
	public List<BookES> fuzzySearch(@RequestParam(defaultValue="lard") String text) throws Exception{
		return bookSer.searchFuzzy(text);
	}
	
	@RequestMapping("/getUsersHaving/{id}")
	public List<User> getAllUser(@PathVariable Long id){
		return bookSer.findAllUserHavingBook(id);
	}
}
