package com.abmv.angular.attack.rest.services;

import org.springframework.beans.factory.annotation.Autowired;
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
	public AppUser register(@RequestBody AppUser u){
		return usrSer.registerUser(u);
	}
	
	@RequestMapping("/getAll")
	public Iterable<AppUser> getAllUsers(){
		return usrSer.getAllUsers();
	}
	
	@RequestMapping(value="/authenticate",method=RequestMethod.POST,consumes="application/json")
	public AppUser authenticate(@RequestBody AppUser au){
		AppUser u=usrSer.getUserByUsername(au.getName());
		if(u.getPassword().equals(au.getPassword())){
			return u;
		}else{
			return null;
		}
	}
	
	
	
}
