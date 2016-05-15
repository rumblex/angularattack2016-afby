package com.abmv.angular.attack.repository.sql;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;

import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.AppUser;

public interface BookRepository extends CrudRepository<Book, Long> {


	Collection<Book> findByOwner(AppUser u);
	
	Collection<Book> findByTitle(String title);
	
}
