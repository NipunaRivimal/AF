package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.domain.Subjects;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectsRepository extends MongoRepository<Subjects, String> {
	List<Subjects> findByName(String name);
}
