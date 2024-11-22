import SubjectModel from "../model/subject.js";

export const createSubject=async (req, res) => {
    try {
      const { name, code} = req.body;
  
      const SubjectObj = new SubjectModel({
        name,
       code,
      });
  
      const savedSubjectObj = await SubjectObj.save();
  
      res.json({
        savedSubjectObj,
        message: "Subject created successfully"
      });
  
    } catch (error) {
        console.log(error);
        
      res.json({
        error: "Error occured",
      });
  
    }
  };

  export const getSubject=async(req,res)=>{
    try {
      const getSubject=await SubjectModel.find()
      res.json({
        getSubject
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }