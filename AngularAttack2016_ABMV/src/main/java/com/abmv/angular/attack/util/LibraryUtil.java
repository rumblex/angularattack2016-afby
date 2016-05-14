package com.abmv.angular.attack.util;

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
		return bookES;
	}
}
