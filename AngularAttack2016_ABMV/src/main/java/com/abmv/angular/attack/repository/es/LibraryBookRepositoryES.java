package com.abmv.angular.attack.repository.es;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.FuzzyLikeThisFieldQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.stereotype.Repository;

import com.abmv.angular.attack.entities.es.BookES;
import com.abmv.angular.attack.util.LibConstants;
import com.abmv.angular.attack.util.LibraryUtil;

@Repository
public class LibraryBookRepositoryES {

	@Autowired
	EsBookRepositoryDefault bookEsRepo;
	
	@Autowired
	Client esClient;
	
	@Autowired
	ElasticsearchTemplate esTemplate;
	
	public BookES save(BookES book){
		return  bookEsRepo.save(book);
	}
	
	protected SearchRequestBuilder getSearchRequestBuilder(){
		return esClient.prepareSearch(LibConstants.INDEX_NAME);
	}
	
	protected SearchRequestBuilder getSearchRequestBuilderBook(){
		return getSearchRequestBuilder().setTypes(LibConstants.BOOK_TYPE);
	}
	
	public List<BookES> fuzzyFilter(String text) throws InterruptedException, ExecutionException{
		FuzzyLikeThisFieldQueryBuilder qb = QueryBuilders.fuzzyLikeThisFieldQuery("_all").likeText(text);
		SearchResponse searchResponse = getSearchRequestBuilderBook().setQuery(qb).execute().get();
		List<BookES> listResult=LibraryUtil.convertResponseToObjects(searchResponse);
		return listResult;
	}
	
	public List<BookES> fuzzyFilter(String text,Long id) throws InterruptedException, ExecutionException{
		
		FuzzyLikeThisFieldQueryBuilder qb = QueryBuilders.fuzzyLikeThisFieldQuery("_all").likeText(text);
		
		BoolQueryBuilder must = QueryBuilders.boolQuery().must(QueryBuilders.matchQuery("ownerId", id))
		.must(qb);
		
		SearchResponse searchResponse = getSearchRequestBuilderBook().setQuery(must).execute().get();
		List<BookES> listResult=LibraryUtil.convertResponseToObjects(searchResponse);
		return listResult;
	}

	public Iterable<BookES> findAll() {
		return bookEsRepo.findAll();
	}

	public void delete(BookES convertToESBook) {
		bookEsRepo.delete(convertToESBook);
	}
}
