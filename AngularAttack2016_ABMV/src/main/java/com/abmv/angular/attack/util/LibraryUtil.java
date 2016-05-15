package com.abmv.angular.attack.util;

import java.util.ArrayList;
import java.util.List;

import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.search.SearchHits;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.entities.sql.Book;

public class LibraryUtil {

	public static BookES ConvertToESBook(Book b){
		BookES bookES = new BookES();
		bookES.setAuthorName(b.getAuthorName());
		bookES.setId(b.getBookId());
		bookES.setRating(b.getRating());
		bookES.setSharable(b.isSharable());
		bookES.setTitle(b.getTitle());
		bookES.setOwnerId(b.getOwner().getId());
		return bookES;
	}

	public static List<BookES> convertResponseToObjects(SearchResponse searchResponse) {
		SearchHits hit = searchResponse.getHits();
		List<BookES> li=new ArrayList<>();
		
		hit.forEach(e->{
			BookES be=new BookES();
			be.setId(Long.valueOf(e.getId()));
			be.setAuthorName(e.getSource().get("authorName").toString());
			be.setRating(Integer.valueOf(e.getSource().get("rating").toString()));
			be.setSharable(Boolean.valueOf(e.getSource().get("sharable").toString()));
			be.setTitle(e.getSource().get("title").toString());
			be.setOwnerId(Long.valueOf(e.getSource().get("ownerId").toString()));
			li.add(be);
		});
		return li;
	}
}
