<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sf" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html>
<body>

<form action="/signin/twitter" method="post">
	        <h1>Please login</h1>
	        <button type="submit">Sign in with Twitter</button>
	 </form>
	 
	 <form action="/signin/facebook" method="POST">
	    <button type="submit">Sign in with Facebook</button>
	    <input type="hidden" name="scope" value="email,public_profile,user_friends" />
	</form>
<sec:authorize access="isAnonymous()">
	its anonymous
</sec:authorize>

<sec:authorize access="isAuthenticated()">
	<div>
        <h2>Your name is {props.name}</h2>
        <form action="/api/session" method="DELETE">
			    <button type="submit">Logout</button>
			</form>
    </div>
	 
</sec:authorize>


   
</body>
</html>