package com.abmv.angular.attack.social.controller;

import java.security.Principal;

import javax.inject.Inject;
import javax.inject.Provider;

import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
public class HomeController {
	
	protected static final Logger log = LoggerFactory.getLogger(HomeController.class);
	
	private final Provider<ConnectionRepository> connectionRepositoryProvider;
	
	@Inject
	public HomeController(Provider<ConnectionRepository> connectionRepositoryProvider) {
		this.connectionRepositoryProvider = connectionRepositoryProvider;
	}

	@RequestMapping("/")
	public String home(Principal currentUser, Model model) {
		model.addAttribute("connectionsToProviders", getConnectionRepository().findAllConnections());
		return "home";
	}
	
	@RequestMapping(path="/posttwitter", method=RequestMethod.POST)
	public String tweet(Model model, @RequestParam String tweet) {
		MultiValueMap<String, Connection<?>> connections = getConnectionRepository().findAllConnections();
		if(tweet!=null){
			Connection<?> twitterC = connections.getFirst("twitter");
			twitterC.updateStatus(tweet);
		}
		model.addAttribute("connectionsToProviders", connections);
		return "home";
	}
	
	@RequestMapping(path="/postfacebook", method=RequestMethod.POST)
	public String facebook(Model model, @RequestParam String post) {
		MultiValueMap<String, Connection<?>> connections = getConnectionRepository().findAllConnections();
		if(post!=null){
			Connection<?> twitterFb = connections.getFirst("facebook");
			try {
				twitterFb.updateStatus(post);
				model.addAttribute("postMessage", "Your message is posted to Facebook");
			} catch (Exception e) {
				model.addAttribute("postMessage", "Your message cannot be posted to Facebook due to some failure");
				log.error("Message can't be posted to Facebook", e.getMessage());
			}
		}
		model.addAttribute("connectionsToProviders", connections);
		return "home";
	}
	
	private ConnectionRepository getConnectionRepository() {
		return connectionRepositoryProvider.get();
	}
}
