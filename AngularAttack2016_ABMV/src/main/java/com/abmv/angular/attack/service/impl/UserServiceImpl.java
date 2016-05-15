package com.abmv.angular.attack.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abmv.angular.attack.entities.sql.Book;
import com.abmv.angular.attack.entities.sql.AppUser;
import com.abmv.angular.attack.repository.sql.UserRepository;
import com.abmv.angular.attack.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository usrRepo;
	
	@Override
	public AppUser registerUser(AppUser u) {
		return usrRepo.save(u);
	}

	@Override
	public AppUser getUserById(Long id) {
		return usrRepo.findOne(id);
	}

	@Override
	public Iterable<AppUser> getAllUsers() {
		return usrRepo.findAll();
	}

	
	
}
