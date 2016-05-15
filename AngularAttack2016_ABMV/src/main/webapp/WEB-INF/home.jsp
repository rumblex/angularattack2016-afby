<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome to book sharing</title>
</head>
<body>

<%-- <p>welcome to book sharing. <sec:authentication property="principal" /></p> --%>

<sec:authorize access="isAuthenticated()">
	<div>
        <h2>Welcome 
        <c:choose>
	        <c:when test="${not empty sessionScope.userDisplayName}"><c:out value="${sessionScope.userDisplayName}"></c:out></c:when>
	        <c:otherwise><sec:authentication property="principal" /></c:otherwise>
        </c:choose>
        </h2>

		 <form action="/api/session" method="POST">
		    <input type="hidden" name="_method" value="DELETE">
		    <input type="submit" value="Logout">
		</form>
    </div>
	 
</sec:authorize>
<sec:authorize access="isAnonymous()">
	Unknown user
</sec:authorize>
</body>


</html>