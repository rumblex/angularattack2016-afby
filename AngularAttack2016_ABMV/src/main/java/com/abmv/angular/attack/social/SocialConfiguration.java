package com.abmv.angular.attack.social;

import javax.inject.Inject;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.jdbc.JdbcUsersConnectionRepository;
import org.springframework.social.connect.support.ConnectionFactoryRegistry;
import org.springframework.social.connect.web.ConnectController;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.social.twitter.api.impl.TwitterTemplate;
import org.springframework.social.twitter.connect.TwitterConnectionFactory;

import com.abmv.angular.attack.social.controller.SinglePageConnectController;
import com.abmv.angular.attack.social.security.SocialAuthenticator;


@Configuration
public class SocialConfiguration {
	
	@Autowired private SocialAuthenticator socialAuthenticator;
	
	@Value("${spring.social.twitter.app-id}")
    private String consumerKey;
 
    @Value("${spring.social.twitter.app-secret}")
    private String consumerSecret;
 
    @Value("${spring.social.twitter.access-token}")
    private String accessToken;
 
    @Value("${spring.social.twitter.access-token-secret}")
    private String accessTokenSecret;
    
    @Value("${spring.social.facebook.app-id}")
    private String fbAccessToken;
    @Value("${spring.social.facebook.app-name}")
    private String fbNamespace;
 
    @Value("${spring.social.facebook.app-secret}")
    private String fbAccessTokenSecret;
 
    @Bean
    public TwitterTemplate twitterTemplate() {
        TwitterTemplate twitterTemplate = new TwitterTemplate(consumerKey, consumerSecret, accessToken, accessTokenSecret);
        return twitterTemplate;
    }
	
	/*@Bean
    public SocialConfigurer socialConfigurerAdapter(DataSource dataSource) {
        return new DatabaseSocialConfigurer(dataSource);
    }

    @Bean
    public SignInAdapter authSignInAdapter() {
        return (userId, connection, request) -> {
        	socialAuthenticator.authenticate(connection, request);
          return "/check";
        };
    }*/
    
    @Inject
	private Environment environment;

	@Inject
	private DataSource dataSource;

	@Bean
	@Scope(value="singleton", proxyMode=ScopedProxyMode.INTERFACES) 
	public ConnectionFactoryLocator connectionFactoryLocator() {
		ConnectionFactoryRegistry registry = new ConnectionFactoryRegistry();
		registry.addConnectionFactory(new TwitterConnectionFactory(consumerKey, consumerSecret));
		registry.addConnectionFactory(new FacebookConnectionFactory(fbAccessToken,fbAccessTokenSecret));
		return registry;
	}

	@Bean
	@Scope(value="singleton", proxyMode=ScopedProxyMode.INTERFACES) 
	public UsersConnectionRepository usersConnectionRepository() {
		return new JdbcUsersConnectionRepository(dataSource, connectionFactoryLocator(), Encryptors.noOpText());
	}

	@Bean
	@Scope(value="request", proxyMode=ScopedProxyMode.INTERFACES)	
	public ConnectionRepository connectionRepository() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication == null) {
			throw new IllegalStateException("Unable to get a ConnectionRepository: no user signed in");
		}
		return usersConnectionRepository().createConnectionRepository(authentication.getName());
	}

	@Bean
	@Scope(value="request", proxyMode=ScopedProxyMode.INTERFACES)	
	public Facebook facebook() {
		Connection<Facebook> facebook = connectionRepository().findPrimaryConnection(Facebook.class);
		return facebook != null ? facebook.getApi() : new FacebookTemplate(fbAccessTokenSecret,fbNamespace, fbAccessToken);
	}
	
	@Bean
	@Scope(value="request", proxyMode=ScopedProxyMode.INTERFACES)	
	public Twitter twitter() {
		Connection<Twitter> twitter = connectionRepository().findPrimaryConnection(Twitter.class);
		return twitter != null ? twitter.getApi() : null;
	}
	
	@Bean
	public ConnectController connectController() {
		SinglePageConnectController connectController = new SinglePageConnectController(connectionFactoryLocator(), connectionRepository());
		return connectController;
	}

}
