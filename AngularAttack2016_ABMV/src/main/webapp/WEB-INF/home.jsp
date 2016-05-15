<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="http://www.springframework.org/spring-social/social/tags" prefix="social" %>
<%@ page session="false" %>

<h4><a href="<c:url value="/connect"/>">Connections</a></h4>


<c:if test="${not empty postMessage}">
	<script type="text/javascript">
		var msg = '<c:out value="${postMessage}"/>';
		alert("Info: "+ msg);
	</script>
</c:if>


<social:connected provider="twitter">
	<h4>Click <a href="<c:url value="/connect"/>">tweet</a> to share your book.</h4>
</social:connected>

<social:connected provider="facebook">
	<h4>Click <a href="<c:url value="/connect"/>">post</a> to share your book.</h4>
</social:connected>

