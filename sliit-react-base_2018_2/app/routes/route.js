const express = require('express');
const app = express();

//getting the path from the Controllers
const CourseControllerRoute = require('../controllers/CourseController');
const SubjectControllerRoute = require('../controllers/SubjectController');

//using them
app.use('/courses', CourseControllerRoute);
app.use('/subjects', SubjectControllerRoute);


module.exports = app;