package com.abmv.angular.attack.rest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.abmv.angular.attack.entities.sql.AppUser;
import com.abmv.angular.attack.service.UserService;

@RestController
@RequestMapping("/user")
public class UserRestService {
	
	@Autowired
	UserService usrSer;
	
	@RequestMapping(value= "/register", method = RequestMethod.POST,
			consumes="application/json")
	public ResponseEntity register(@RequestBody AppUser u){
		usrSer.registerUser(u);
		return new ResponseEntity(u, HttpStatus.OK);
	}
	
	@RequestMapping("/getAll")
	public Iterable<AppUser> getAllUsers(){
		return usrSer.getAllUsers();
	}
	
	
	
}
