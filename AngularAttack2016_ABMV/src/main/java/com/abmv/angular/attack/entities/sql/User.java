package com.abmv.angular.attack.entities.sql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private String contactNo;
	
	private String emailId;
	
	@OneToMany
	private Set<Book> library;
	
	public User() {
	}
	
	public User(String name){
		this.name=name;
	}
}
