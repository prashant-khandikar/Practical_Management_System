import mongoose from 'mongoose';  
  
const EnrollSchema=mongoose.Schema({  
    Practical:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"Practical",  
        required:true  
    },  
    student:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"User",  
        required:true  
    }  
  
})  
  
const EnrollModel=mongoose.model("Enroll",EnrollSchema);  
  
export default EnrollModel; 