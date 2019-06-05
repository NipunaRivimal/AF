const express = require('express');
const router = express.Router();

//Course Model
const Course = require('../models/Course');

//@route GET /courses
//Gets all courses
//@access Public
router.get('/get-courses', (req,res) => {
    Course.find()
        .then(courses =>res.json(courses))
});


//@route GET /course
//Gets a particular course
//@access Public
router.get('/get-course/:id', (req,res) => {
    Course.findById(req.params.id)
        .then(course => res.json(course));
});

//Gets subjects in a given course
router.get('/:id/subjects', (req,res) =>{
    Course.findById(req.params.id)
        .populate('subjects')
        .select('name')
        .then(subjects => res.json(subjects));

});

//@route POST /courses
//Adds a new course
//@access Public
router.post('/add-course', (req,res) => {
    const newCourse = new Course({
        name: req.body.name,
        code:req.body.code,
        passMark: req.body.passMark,
        lecturerInCharge: req.body.lecturerInCharge,
        subjects: req.body.subjects
    });
    newCourse.save()
        .then(course => res.json(course));
});


//@route DELETE /courses
//Deletes a course
//@access Public
router.delete('/delete-course/:id', (req,res) => {
    Course.findById(req.params.id)
        .then(course => course.remove() . then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});

module.exports= router;