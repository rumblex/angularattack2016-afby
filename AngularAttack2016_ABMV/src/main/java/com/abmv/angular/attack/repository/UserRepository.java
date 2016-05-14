package com.abmv.angular.attack.repository;

import org.springframework.data.repository.CrudRepository;

import com.abmv.angular.attack.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
