import PracticalModel from '../model/practical.js';
import SubjectModel from '../model/subject.js';

export const createPractical = async (req, res) => {
  try {
    const { subjectId, title, description, createdBy } = req.body;

    // Verify subject exists
    const subjectInfo = await SubjectModel.findById(subjectId);

    if (!subjectInfo) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    // Create a new Practical object
    const practicalObj = new PracticalModel({
      subjectId: subjectInfo._id,
      title,
      description,
      createdBy,
    });

    // Save the Practical document
    const savedPractical = await practicalObj.save();

    // Update the Subject to include the new Practical
    const updatedSubject = await SubjectModel.findByIdAndUpdate(
      subjectInfo._id,
      { $push: { practicals: savedPractical._id } },
      { new: true }
    )
      .populate('practicals')
      .exec();

    res.json({ Subject: updatedSubject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while adding Practical' });
  }
};

export const getAllPractical = async (req, res) => {
  try {
    const practicals = await PracticalModel.find().populate('subjectId createdBy enrolledStudents');
    res.json({ practicals });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error while fetching practicals' });
  }
};
