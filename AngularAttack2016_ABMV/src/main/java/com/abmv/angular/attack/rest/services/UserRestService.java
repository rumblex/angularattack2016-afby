package com.abmv.angular.attack.rest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abmv.angular.attack.entities.User;
import com.abmv.angular.attack.service.UserService;

@RestController
public class UserRestService {
	
	@Autowired
	UserService usrSer;
	
	@RequestMapping("/register")
	public User register(){
		User u=new User();
		u.setContactNo("+91 22");
		u.setEmailId("bb@ttt.com");
		return usrSer.registerUser(u);
	}
	
	@RequestMapping("/getAllUsers")
	public Iterable<User> getAllUser(){
		return usrSer.getAllUsers();
	}
	
}
