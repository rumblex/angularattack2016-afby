package com.abmv.angular.attack.entities.es;

import javax.persistence.Id;

import org.springframework.data.elasticsearch.annotations.Document;

import com.abmv.angular.attack.util.LibConstants;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Document(indexName=LibConstants.INDEX_NAME,type=LibConstants.BOOK_TYPE)
public class BookES {

	@Id
	private Long id;
	
	private String title;
	
	private String authorName;
	
	private boolean sharable;
	
	private Integer rating;
	
	private Long ownerId;
	
}
