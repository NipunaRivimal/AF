package com.example.demo.controllers;

import com.example.demo.services.CoursesService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping(method = RequestMethod.GET, value="/courses")
public class CoursesController {
	
	@Autowired
	private CoursesService coursesService;
		
	@RequestMapping(value = "/subjectAmount/{name}", method = RequestMethod.GET)
	public double getCourseAmountById(@PathVariable("id") String name) {
		try {
			return coursesService.getTotalAmountForCourse(name);
		} catch (IllegalAccessException ex) {
			return -999.99;
		}
	}
}
