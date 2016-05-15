package com.abmv.angular.attack.repository.sql;

import org.springframework.data.repository.CrudRepository;

import com.abmv.angular.attack.entities.sql.AppUser;

public interface UserRepository extends CrudRepository<AppUser, Long> {

	AppUser findByName(String name);
	
}
