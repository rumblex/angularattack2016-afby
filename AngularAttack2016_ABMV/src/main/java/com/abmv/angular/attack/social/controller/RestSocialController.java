package com.abmv.angular.attack.social.controller;

import java.security.Principal;

import javax.inject.Inject;
import javax.inject.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.Getter;
import lombok.Setter;

@RestController
public class RestSocialController {
	private final Provider<ConnectionRepository> connectionRepositoryProvider;
	protected static final Logger log = LoggerFactory.getLogger(RestSocialController.class);
	@Inject
	public RestSocialController(Provider<ConnectionRepository> connectionRepositoryProvider) {
		this.connectionRepositoryProvider = connectionRepositoryProvider;
	}
	
	@RequestMapping(path="/checksocial", produces="application/json; charset=UTF-8")
	public String home(Principal currentUser, Model model) {
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
		model.addAttribute("view", "/");
		log.info("connection available: "+responseStr.toString());
		return responseStr.toString();
	}
	
	@RequestMapping(path="/resttwitter", method=RequestMethod.POST, produces="application/json; charset=UTF-8")
	public String tweet(Model model, @RequestBody Tweet tweet) {
		MultiValueMap<String, Connection<?>> connections = getConnectionRepository().findAllConnections();
		String postMessage = "";
		if(tweet!=null){
			Connection<?> twitterC = connections.getFirst("twitter");
			try{
				twitterC.updateStatus(tweet.getTweet());
				postMessage = "Tweet sent successfully.";
			}catch(Exception e) {
				postMessage = "Failed to tweet";
				log.error("Tweet failed", e.getMessage());
			}
		}
		model.addAttribute("connectionsToProviders", connections);
		return postMessage;
	}
	
	@RequestMapping(path="/restfacebook", method=RequestMethod.POST, produces="application/json; charset=UTF-8")
	public String facebook(Model model, @RequestBody FbPost post) {
		MultiValueMap<String, Connection<?>> connections = getConnectionRepository().findAllConnections();
		String postMessage = "";
		if(post!=null){
			Connection<?> twitterFb = connections.getFirst("facebook");
			try {
				twitterFb.updateStatus(post.getPost());
				postMessage = "Your message is posted to Facebook";
			} catch (Exception e) {
				postMessage = "Your message cannot be posted to Facebook due to some failure";
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

@Getter
@Setter
class Tweet{
	private String tweet;
}

@Getter
@Setter
class FbPost{
	private String post;
}
