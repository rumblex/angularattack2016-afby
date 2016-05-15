package com.abmv.angular.attack.service;

import com.abmv.angular.attack.entities.sql.AppUser;

public interface UserService {

	AppUser registerUser(AppUser u);
	
	AppUser getUserById(Long id);
	
	Iterable<AppUser> getAllUsers();

	AppUser getUserByUsername(String name);
	
}
