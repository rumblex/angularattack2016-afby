package com.abmv.angular.attack.social.controller;

import java.security.Principal;

import javax.inject.Inject;
import javax.inject.Provider;

import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestSocialController {
	private final Provider<ConnectionRepository> connectionRepositoryProvider;
	
	@Inject
	public RestSocialController(Provider<ConnectionRepository> connectionRepositoryProvider) {
		this.connectionRepositoryProvider = connectionRepositoryProvider;
	}
	
	@RequestMapping("/checksocial")
	public Model home(Principal currentUser, Model model) {
		MultiValueMap<String, Connection<?>> findAllConnections = getConnectionRepository().findAllConnections();
		StringBuffer responseStr = new StringBuffer();
		findAllConnections.entrySet().forEach(x->{
			x.getValue().forEach(y->{
				String socialType = y.getApi() instanceof Twitter ? "Twitter" : (y.getApi() instanceof Facebook ? "Facebook" : "Unknown");
				String userName = y.getDisplayName();
				responseStr.append( userName + " at "+socialType +", ");
			});;
		});
		model.addAttribute("connectionsToProviders", findAllConnections);
		model.addAttribute("responseStr", responseStr.toString());
		return model;
	}
	
	private ConnectionRepository getConnectionRepository() {
		return connectionRepositoryProvider.get();
	}
}
