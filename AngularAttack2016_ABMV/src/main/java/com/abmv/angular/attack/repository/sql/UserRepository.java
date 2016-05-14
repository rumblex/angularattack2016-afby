package com.abmv.angular.attack.repository.sql;

import org.springframework.data.repository.CrudRepository;

import com.abmv.angular.attack.entities.sql.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
}
