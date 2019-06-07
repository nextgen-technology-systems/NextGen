package com.nextgen.myaccount.contoller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/")
public class UserContoller {

	private static final Logger logger 
    = LoggerFactory.getLogger(UserContoller.class);
	
	@Value("${com.name}")
	private String name;
	
	
	@RequestMapping(value = "/test", method = RequestMethod.GET, produces = "text/plain")
	public ResponseEntity<String> tmobileCallBack() {

		System.out.println("Request received Async XML data :");
		logger.info("Example log from {}", TestMain.class.getSimpleName());
		return ResponseEntity.ok("Success:"+name);
	}

}
