const express = require('express');
const router = express.Router();

//Subject Model
const Subject = require('./../models/Subject');

//@Route GET /subjects
//Gets all subjects
//access Public
router.get('/get-subjects', (req,res) => {
    Subject.find()
        .then(subjects => res.json(subjects));
});



//@Route GET /subjects/id
//Gets a subject
//access Public
router.get('/get-subject/:id', (req,res) => {
    Subject.findById(req.params.id)
        .then(subject => res.json(subject));
});



//@Route POST /subjects
//Adds a subject
//access Public
router.post('/', (req,res) => {
    const newSubject = new Subject({
        name: req.body.name,
        description:req.body.description,
        amount: req.body.amount
    });
    newSubject.save()
        .then(subject => res.json(subject));
});



//@Route DELETE /subjects
//Deletes a subject
//access Public
router.delete('/delete-subject/:id', (req,res) => {
    Subject.findById(req.params.id)
        .then(subject => subject.remove(). then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});


module.exports = router ;