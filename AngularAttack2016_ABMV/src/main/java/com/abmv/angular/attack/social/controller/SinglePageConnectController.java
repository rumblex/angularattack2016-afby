package com.abmv.angular.attack.social.controller;

import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.web.ConnectController;
import org.springframework.ui.Model;
import org.springframework.web.context.request.NativeWebRequest;

public class SinglePageConnectController  extends ConnectController{
	public SinglePageConnectController(ConnectionFactoryLocator connectionFactoryLocator, ConnectionRepository connectionRepository) {
		super(connectionFactoryLocator, connectionRepository);
	}

	/**
	 * Override the per-provider status page handler to simply redirect to the master status page.
	 */
	@Override
	public String connectionStatus(String providerId, NativeWebRequest request, Model model) {
		return "redirect:/connect";
	}
}
