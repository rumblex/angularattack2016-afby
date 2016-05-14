package com.abmv.angular.attack.repository;

import org.springframework.data.repository.CrudRepository;

import com.abmv.angular.attack.entities.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

}
