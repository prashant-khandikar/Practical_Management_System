import Enroll from '../model/enroll.js';
import PracitcalModel from '../model/practical.js';

  
export const EnrollPractical = async (req, res) => {  
  try {  
    const { Practical, student} = req.body;  
  
    const enroll = new Enroll({  
      Practical,  
      student,  
    });  
  
    const savedEnroll=await enroll.save();  
  
    const updatedPractical = await PracitcalModel.findByIdAndUpdate(  
      Practical,  
      { $push: { enroll: savedEnroll._id } },  
      { new: true }  
    )  
    .populate("Enroll")  
    .exec();  
  
    res.json({  
   
       Practical: updatedPractical
    })  
  } catch (error) {  
    console.log(error)
    return res.status(500).json({  
        
        error: "Error while enrolling practical",  
    }
    
);  
  }  
};  
