package com.abmv.angular.attack.social.controller;

import java.io.IOException;
import java.security.Principal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.web.ProviderSignInUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.abmv.angular.attack.entities.sql.AppUser;
import com.abmv.angular.attack.social.security.SocialAuthenticator;


@Controller
public class SignupController {
	protected static final Logger log = LoggerFactory.getLogger(SignupController.class);
	private final ProviderSignInUtils signInUtils;
	
	@Autowired private SocialAuthenticator socialAuthenticator;

    @Autowired
    public SignupController(ConnectionFactoryLocator connectionFactoryLocator, UsersConnectionRepository connectionRepository) {
        signInUtils = new ProviderSignInUtils(connectionFactoryLocator, connectionRepository);
    }
	
	@RequestMapping("/check/**")
	public String login(HttpSession session){
		if(session.getAttribute("username")!=null && SecurityContextHolder.getContext().getAuthentication()==null){
			String username = (String) session.getAttribute("username");
			log.debug("This is called"+username+", displayname:"+session.getAttribute("userDisplayName"));
			UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null, null);
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		if(SecurityContextHolder.getContext().getAuthentication()!=null)
			log.info("check: "+SecurityContextHolder.getContext().getAuthentication().getPrincipal());
		else
			log.info("check: no user detail is available");
		return "/home";
	}
	
    @RequestMapping(value = "/signup")
    public String signup(WebRequest request, HttpSession session, HttpServletRequest httpRequest) {
        Connection<?> connection = signInUtils.getConnectionFromSession(request);
        if (connection != null) {
        	socialAuthenticator.authenticate(connection, httpRequest);
          signInUtils.doPostSignUp(connection.getDisplayName(), request);
        }
        if(SecurityContextHolder.getContext().getAuthentication()!=null){
        	log.debug("after authentication - "+SecurityContextHolder.getContext().getAuthentication().getPrincipal()+
					"sessionid"+request.getSessionId()+", connection.getDisplayName()"+connection.getDisplayName());
			session.setAttribute("username", SecurityContextHolder.getContext().getAuthentication().getPrincipal());
			session.setAttribute("userDisplayName", connection.getDisplayName());
        }else{
        	log.error("after authentication no user detail is available");
        }
        return "redirect:/check";
    }
}

@RestController	
@RequestMapping("/api/session")
class AuthenticationResource {
	protected static final Logger log = LoggerFactory.getLogger(AuthenticationResource.class);
	
    @Autowired
    AuthenticationManager authenticationManager;

    @RequestMapping(method = RequestMethod.GET)
    public AppUser session(Principal user) {
        String name = user == null ? null : user.getName();
        return new AppUser(name);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public String logout(HttpSession session, HttpServletResponse response) {
        session.invalidate();
        try {
			response.sendRedirect("/");
		} catch (IOException e) {
			log.error("Response redirect failed after logout.", e);
		}
        return "redirect:/";
    }
}
