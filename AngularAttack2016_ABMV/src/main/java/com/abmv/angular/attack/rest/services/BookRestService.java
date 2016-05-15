package com.abmv.angular.attack.rest.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.AppUser;
import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.service.BookService;
import com.abmv.angular.attack.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/book")
public class BookRestService {

	@Autowired
	BookService bookSer;
	
	@Autowired
	UserService usrSer;
	
	@RequestMapping(value= "/{usrId}/add", method = RequestMethod.POST,
			consumes="application/json")
	public Book addBook(@PathVariable Long usrId,@RequestBody Book b){
		b.setOwner(usrSer.getUserById(usrId));
		b=bookSer.addBook(b);
		return b;
	}
	
	@RequestMapping("/getAll")
	public List<Book> getBooks() throws Exception{
		 return bookSer.getAllBooks();
	}
	
	@RequestMapping("/{usrId}/getUserLibrary")
	public Collection<Book> getLibrary(@PathVariable Long usrId){
		return bookSer.getLibrary(usrSer.getUserById(usrId));
	}
	
	@RequestMapping("/{usrId}/fuzzySearch")
	public List<Book> fuzzySearch(@PathVariable Long usrId,@RequestParam String searchText) throws Exception{
		return bookSer.fuzzyFilter(searchText, usrId);
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
