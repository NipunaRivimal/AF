package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.domain.Courses;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoursesRepository extends MongoRepository<Courses, String> {
	List<Courses> findByName(String name);
}
