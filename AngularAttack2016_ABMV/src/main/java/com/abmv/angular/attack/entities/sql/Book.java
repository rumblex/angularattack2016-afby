package com.abmv.angular.attack.entities.sql;

import java.util.Set;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long bookId;
	
	private String title;
	
	private String authorName;
	
	private boolean sharable;
	
	private byte[] image;
	
	private Integer rating;
	
	@ManyToOne
	@JoinColumn(name="owner_id")
	private User owner;
	
	@OneToOne
	private User loanedTo;
	
	@ElementCollection(targetClass=Genre.class)	
	@Enumerated(EnumType.STRING)
	private Set<Genre> genres;
	
}
