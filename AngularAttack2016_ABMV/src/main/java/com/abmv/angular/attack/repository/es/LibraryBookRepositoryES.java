package com.abmv.angular.attack.repository.es;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.ListenableActionFuture;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.index.query.FuzzyLikeThisFieldQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.stereotype.Repository;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.util.LibConstants;

@Repository
public class LibraryBookRepositoryES {

	@Autowired
	BookEsRepositoryDefault bookEsRepo;
	
	@Autowired
	Client esClient;
	
	public BookES save(BookES book){
		return  bookEsRepo.save(book);
	}
	
	protected SearchRequestBuilder getSearchRequestBuilder(){
		return esClient.prepareSearch(LibConstants.INDEX_NAME);
	}
	
	protected SearchRequestBuilder getSearchRequestBuilderBook(){
		return getSearchRequestBuilder().setTypes(LibConstants.BOOK_TYPE);
	}
	
	public List<BookES> filter() throws InterruptedException, ExecutionException{
		//getSearchRequestBuilderBook().
		/*QueryBuilder qb=QueryBuilders.fuzzyQuery("_all", "tok");*/
		FuzzyLikeThisFieldQueryBuilder qb = QueryBuilders.fuzzyLikeThisFieldQuery("_all").likeText("%tok%");
		SearchResponse searchResponse = getSearchRequestBuilderBook().setQuery(qb).execute().get();
		return null;
	}
}
