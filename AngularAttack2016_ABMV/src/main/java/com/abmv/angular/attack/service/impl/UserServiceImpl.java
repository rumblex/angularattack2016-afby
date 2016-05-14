package com.abmv.angular.attack.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.User;
import com.abmv.angular.attack.repository.sql.UserRepository;
import com.abmv.angular.attack.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository usrRepo;
	
	@Override
	public User registerUser(User u) {
		return usrRepo.save(u);
	}

	@Override
	public User getUserById(Long id) {
		return usrRepo.findOne(id);
	}

	@Override
	public Iterable<User> getAllUsers() {
		return usrRepo.findAll();
	}

	
	
}
