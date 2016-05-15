package com.abmv.angular.attack.social.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.NativeWebRequest;

@Controller
public class SigninController {
	protected static final Logger log = LoggerFactory.getLogger(SigninController.class);

	@RequestMapping(value="/signin", method=RequestMethod.GET)
	public void signin() {
		SecurityContextHolder.getContext().getAuthentication();
	}
	
	@RequestMapping(value="/gotoconnect", method=RequestMethod.GET)
	public String gotoConnect(Model model, @RequestParam String bookName, NativeWebRequest request, HttpServletRequest httpRequest) {
		log.info("Received book name: "+ bookName);
		if(bookName!=null){
			request.setAttribute("bookName", bookName, NativeWebRequest.SCOPE_GLOBAL_SESSION);
			httpRequest.getServletContext().setAttribute("bookName", bookName);
			model.addAttribute("bookName", bookName);
		}
		return "redirect:/connect";
	}
}
