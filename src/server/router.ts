import express from 'express';
const router = express.Router();
import Student from './Student';;
router.get("/getStudent", Student.getStudent);
router.post("/addStudent", Student.addStudent);
router.put("/upodateStudent", Student.updateStudent);
export default router;
// const fetchedData = await db.collection("students").find().toArray();
