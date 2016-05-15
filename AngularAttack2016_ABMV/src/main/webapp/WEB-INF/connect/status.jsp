<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sf" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ page session="false" %>
<html>
	<head>
		<style type="text/css">
		
			div.accountConnection {
				margin: 10px;
				width: 600px;
				background-color: #ffffff;
				border: 1px solid #000066;
			}
			
			div.accountConnection h4 {
				margin-top: 0;
				background-color: #efefef;
			}
			
			div.accountConnection h4 img {
				vertical-align: middle;
			}
			
			.connectionOptions {
				font-size: 10pt;
			}
		</style>
		<script
			  src="https://code.jquery.com/jquery-2.2.3.min.js"
			  integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="
			  crossorigin="anonymous"></script>
	</head>
	<body>
		<script>
		if(window.opener) {
			window.opener.location.reload(false);
			window.close();
		}
		</script>
				
		<h3>Your Connections</h3>

		<c:forEach var="providerId" items="${providerIds}">
			<c:set var="connections" value="${connectionMap[providerId]}" />
			
			<c:if test="${providerId eq 'facebook'}">
				<div class="accountConnection">
					<h4><img src="/images/facebook/f_logo.jpg" width="36" height="36" />Facebook</h4>
					<c:url value="/connect/facebook" var="connectUrl" />
							
					<c:if test="${empty connections}">
					<form action="${connectUrl}" method="POST" class="connectForm">
						<div class="formInfo">
							You are not yet connected to Facebook.
						</div>
						<button class="connectButton" type="submit"><img src="<c:url value="/images/facebook/sign-in-with-facebook.png" />"/></button>
						<input type="hidden" name="scope" value="email,public_profile,user_friends,user_actions.books,publish_pages,manage_pages,publish_actions,publish_stream" />
						<p class="connectionOptions"><label for="postToWall"><input id="postToWall" type="checkbox" name="postToWall" /> Tell your friends using Sher'e Book App on your Facebook wall</label></p>
					</form>
					</c:if>
					
					<c:if test="${not empty connections}">
					<form id="facebookDisconnect" method="post" action="${connectUrl}">
						<p>You are connected to Facebook
					   	as <a href="${connectionMap[providerId][0].profileUrl}">${connectionMap[providerId][0].displayName}</a>.</p>
						<button class="disconnectButton" type="submit">Disconnect</button>	
						<input type="hidden" name="_method" value="delete" />
					</form>
					<form id="facebookPost" method="post" action="/postfacebook">
						<p>Post to Facebook as <a href="${connectionMap[providerId][0].profileUrl}">${connectionMap[providerId][0].displayName}</a>.</p>
						<textarea id="post" name="post" rows="5" cols="60"></textarea>
						<button class="disconnectButton" type="submit">Post</button>	
					</form>
					</c:if>
				</div>
			</c:if>
			
			<c:if test="${providerId eq 'twitter'}">
				<div class="accountConnection">
					<h4><img src="/images/twitter/t_logo-a.png" width="36" height="36" />Twitter</h4>
					<c:url value="/connect/twitter" var="connectUrl" />
							
					<c:if test="${empty connections}">
					<form action="${connectUrl}" method="POST" class="connectForm">
						<div class="formInfo">
							You are not yet connected to Twitter.
						</div>
						<button class="connectButton" type="submit"><img src="<c:url value="/images/twitter/connect-with-twitter.png" />"/></button>
						<p class="connectionOptions"><label for="postTweet"><input id="postTweet" type="checkbox" name="postTweet" /> Post a tweet about using Sher'e Book App</label></p>
					</form>
					</c:if>
					
					<c:if test="${not empty connections}">
						<form id="twitterDisconnect" method="post" action="${connectUrl}">
							<p>You are connected to Twitter 
						   	as <a href="${connectionMap[providerId][0].profileUrl}">${connectionMap[providerId][0].displayName}</a>.</p>
							<button class="disconnectButton" type="submit">Disconnect</button>	
							<input type="hidden" name="_method" value="delete" />
						</form>
						<form id="twitterTweet" method="post" action="/posttwitter">
							<p>Post to Facebook as <a href="${connectionMap[providerId][0].profileUrl}">${connectionMap[providerId][0].displayName}</a>.</p>
							<textarea id="tweet" name="tweet" rows="2" cols="60"></textarea>
							<button class="disconnectButton" type="submit">Tweet</button>	
						</form>
					</c:if>
				</div>
			</c:if>
		</c:forEach>
		
		<script>
		$(document).ready(function() {
			$(".connectButton").click(function(event){
				event.preventDefault();
				window.open("", "connectWindow", "width=600,height=400");
				var cTP = $(event.currentTarget).parent();		
				cTP[0].setAttribute("target", "connectWindow");
				cTP[0].submit();
			});
		});
		</script>
	</body>
</html>


