package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {

	@RequestMapping(value = "/test", method = RequestMethod.GET, produces = "text/plain")
	public ResponseEntity<String> tmobileCallBack() {

		System.out.println("Request received Async XML data :");

		return ResponseEntity.ok("Success");
	}

}
