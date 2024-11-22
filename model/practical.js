import mongoose from 'mongoose';

const PracticalSchema = mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // assuming 'User' is the model for users
    required: true,
  },
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Enroll', // assuming 'Enroll' is the model for enrollments
    },
  ],
});

const PracticalModel = mongoose.model('Practical', PracticalSchema);

export default PracticalModel;
