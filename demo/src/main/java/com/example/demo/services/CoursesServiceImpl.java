package com.example.demo.services;

import com.example.demo.domain.Courses;
import com.example.demo.domain.Subjects;
import com.example.demo.repository.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoursesServiceImpl implements CoursesService {

    @Autowired
    private CoursesRepository coursesRepository;

    @Override
    public double getTotalAmountForCourse(String name) throws IllegalAccessException {
        double totalAmount = 0;
        Courses course = getCoursesByName(name);
        List<Subjects> subjectsList = course.getSubjects();

        for (Subjects subject : subjectsList) {
            totalAmount += subject.getAmount();
        }

        return totalAmount;
    }

    private Courses getCoursesByName(String name) throws IllegalAccessException {
        List<Courses> courseList = coursesRepository.findByName(name);

        if(courseList == null || courseList.size() == 0) {
            throw new IllegalAccessException(name + ", Invalid Course Name");
        }
        return courseList.get(0);
    }
}
