package com.abmv.angular.attack.repository.es;

import org.springframework.data.elasticsearch.repository.ElasticsearchCrudRepository;

import com.abmv.angular.attack.entities.es.BookES;

public interface EsBookRepositoryDefault extends ElasticsearchCrudRepository<BookES, Long> {

}
