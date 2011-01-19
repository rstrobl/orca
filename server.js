var S2JServer = {
	
	_waitingForResponse: null,
	_result: null,
	
	performOnServer : function (classname, method, stringArgument) {
		// Object >> perform: selector withArguments: argArray
		var command = "class=" 	+ classname + "&" +
					  "method=" + method;		
		if (arguments.length == 3) {
		  command = command + "&" + 
		  			"argument=" + stringArgument;
		}
		
		S2JServer._result = S2JConnection.send(command);
		
		return eval(S2JServer._result);
	}
	
}
