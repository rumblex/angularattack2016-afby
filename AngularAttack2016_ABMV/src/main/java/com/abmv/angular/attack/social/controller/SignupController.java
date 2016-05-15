package com.abmv.angular.attack.social.controller;

import javax.inject.Inject;
import javax.validation.Valid;

import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.web.ProviderSignInUtils;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;

import com.abmv.angular.attack.entities.sql.AppUser;


@Controller
public class SignupController {
	private final ProviderSignInUtils providerSignInUtils;

	@Inject
   public SignupController(ConnectionFactoryLocator connectionFactoryLocator, UsersConnectionRepository connectionRepository) {
		providerSignInUtils = new ProviderSignInUtils(connectionFactoryLocator, connectionRepository);
   }

	@RequestMapping(value="/signup", method=RequestMethod.GET)
	public AppUser signupForm(WebRequest request) {
		Connection<?> connection = providerSignInUtils.getConnectionFromSession(request);
		return new AppUser(connection.getDisplayName());
	}

	@RequestMapping(value="/signup", method=RequestMethod.POST)
	public String signup(@Valid AppUser form, BindingResult formBinding, WebRequest request) {
		if (formBinding.hasErrors()) {
			return null;
		}
		if(form.getUsername()!=null){
			String username = form.getUsername();
			ControllerUtil.signin(username);
			providerSignInUtils.doPostSignUp(username, request);
			return "redirect:/";
		}
		return null;
	}
}
