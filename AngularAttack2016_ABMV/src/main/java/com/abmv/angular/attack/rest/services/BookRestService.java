package com.abmv.angular.attack.rest.services;

import java.lang.invoke.MethodType;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.AppUser;
import com.abmv.angular.attack.service.BookService;
import com.abmv.angular.attack.service.UserService;
import com.abmv.angular.attack.util.LibraryUtil;

@CrossOrigin
@RestController
@RequestMapping("/book")
public class BookRestService {

	@Autowired
	BookService bookSer;
	
	@Autowired
	UserService usrSer;
	
	@RequestMapping(value= "/add", method = RequestMethod.POST,
			consumes="application/json")
	public Book addBook(@RequestBody Book b){
		b.setOwner(usrSer.getUserById(LibraryUtil.getLoggedInUserId()));
		b=bookSer.addBook(b);
		return b;
	}
	
	@RequestMapping("/getAll")
	public Iterable<BookES> getBooks() throws Exception{
		
		Iterable<BookES> iter = bookSer.getAllBooks();
		
		Collection<BookES> list = new ArrayList<BookES>();
	    for (BookES item : iter) {
	        list.add(item);
	    }
	    return list;
		
	}
	
	@RequestMapping("/getUserLibrary")
	public Collection<Book> getLibrary(){
		return bookSer.getLibrary(usrSer.getUserById(LibraryUtil.getLoggedInUserId()));
	}
	
	@RequestMapping("/{id}/fuzzySearch")
	public List<Book> fuzzySearch(@PathVariable() Long id,@RequestParam String searchText) throws Exception{
		return bookSer.fuzzyFilter(searchText, id);
	}
	
	@RequestMapping("/fuzzySearch")
	public List<Book> fuzzySearch(@RequestParam String searchText) throws Exception{
		return bookSer.searchFuzzy(searchText);
	}
	
	@RequestMapping("/getUsersHaving/{id}")
	public List<AppUser> getAllUser(@PathVariable Long id){
		return bookSer.findAllUserHavingBook(id);
	}
	
	@RequestMapping(value="/delete",method=RequestMethod.POST)
	public boolean deleteBook(@RequestBody Book b){
		bookSer.removeBook(b);
		return true;
	}
	
	@RequestMapping("/getBook/{id}")
	public Book getBookById(@PathVariable Long id){
		return bookSer.getBookById(id);
	}
	
	@RequestMapping("/getLatestBook")
	public Collection<Book> getLatestBook(){
		Collection<Book> ret=new ArrayList<>();
		ArrayList<Book> latestBooks = new ArrayList<>(bookSer.getLatestBooks());
		
		for(int i=0;i<3 && i<latestBooks.size();i++){
			ret.add(latestBooks.get(i));
		}
		
		return ret;
	}
	
	@RequestMapping("/getMostRead")
	public Collection<Book> getMostRead(){
		Collection<Book> ret=new ArrayList<>();
		ArrayList<Book> latestBooks = new ArrayList<>(bookSer.getLatestBooks());
		ArrayList<Integer> indexes=new ArrayList<>();
		for(int j=0;j<3;j++){
			indexes.add((int) ((Math.random()*10)%latestBooks.size()));
		}
		
		for(int i=0;i<3 && i<latestBooks.size();i++){
			ret.add(latestBooks.get(indexes.get(i)));
		}
		
		return ret;
	}
}
