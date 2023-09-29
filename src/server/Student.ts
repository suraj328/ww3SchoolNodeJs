import StudentModel from "./skeletion";
import { Request, Response } from 'express';
interface reqDataInterface {
  name: string,
  age: number
}
class Student {
  constructor(){
    console.log("student");
  }
  static getStudent = async (req: Request, res: Response) => {
    // const studentData = await studentModel.find({ $and: [{ age: { $lte: 45 } }] }, { name: 1, age: 1, });
    const studentData = await StudentModel.find({ });
    res.status(200).json(studentData);
  }
  //inserting student
  static addStudent = async (req: Request, res: Response) => {
    
    const studentData: reqDataInterface = req.body;
    const  insertModel = new StudentModel(studentData);
    try {
      await insertModel.save();
      res.status(200).json("Data added Succesfully").end();
    } catch (error) {
      res.status(500).end();
      throw error;
    }
  }
  // updating
  static updateStudent = async (req:Request,res:Response)=>{
    const updateData:reqDataInterface = req.body;
    try {
      const result = await StudentModel.findOneAndUpdate({ _id:"6511649c04993d306a6b96f9" }, { $set: updateData });
      // const result = await StudentModel.updateMany({ name: 'suraj' }, { $set: updateData });
      if(result){
        res.status(200).send("data updated");
      }
      res.status(200).send("no data updated");
    } catch (error) {
      res.status(500).end();
      throw error;
    }
  }
  //deleting
  static deleteStudent = async (req:Request,res:Response)=>{
    const updateData:reqDataInterface = req.body;
    try {
      const result = await StudentModel.findOneAndDelete({ _id: '632e6d193637385f62d60945' });
      if(result){
        res.status(200).send("data deleted");
      }
      res.status(200).send("no data deleted");
    } catch (error) {
      res.status(500).end();
      throw error;
    }
  }
}

export default Student;