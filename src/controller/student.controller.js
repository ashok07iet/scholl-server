const Student=require('../models/student.model');
const winston=require('winston');
module.exports={
    createStudent:createStudent,
    getAllStudent:getAllStudent
};
/**
 * @param {Request} req
 * @param {Response} res
*/
async function getAllStudent(req, res) {
    winston.info(req.body);
    const students = await Student.find();
    res.status(200);
    res.json(students);
};
/**
 * @param {Request} req
 * @param {Response} res
*/
async function createStudent (req,res){
    winston.info(req.body);
    let response="";
    try{
        const student=new Student(req.body);
        await student.save();
        response="student saved successfully"
        res.status(200);
    }catch(error){
        winston.error("error in saving student",error);
        response="error in saving student";
        res.status(500);
    }finally{
        res.send(response);
    } 
}