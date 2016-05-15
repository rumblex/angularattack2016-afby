package com.abmv.angular.attack.social;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.social.config.annotation.SocialConfigurer;
import org.springframework.social.connect.web.SignInAdapter;

import com.abmv.angular.attack.social.security.SocialAuthenticator;


@Configuration
public class SocialConfiguration {
	
	@Autowired private SocialAuthenticator socialAuthenticator;
	
	@Bean
    public SocialConfigurer socialConfigurerAdapter(DataSource dataSource) {
        return new DatabaseSocialConfigurer(dataSource);
    }

    @Bean
    public SignInAdapter authSignInAdapter() {
        return (userId, connection, request) -> {
        	socialAuthenticator.authenticate(connection, request);
          return "/check";
        };
    }

}
