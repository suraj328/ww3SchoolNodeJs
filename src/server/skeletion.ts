import mongoose, { Schema } from "mongoose";
interface stdInterface{
    name: string;
    age: number;
  }
const stdSchema: Schema<stdInterface> = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
  });
const StudentModel = mongoose.model('Students', stdSchema);
export default StudentModel;
