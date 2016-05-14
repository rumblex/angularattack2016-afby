package com.abmv.angular.attack.repository.sql;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;

import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.User;

public interface BookRepository extends CrudRepository<Book, Long> {


	//@Query("select b from Book b where b.owner.id = (:bookId)")
	Collection<Book> findByOwner(User u);
	
}
