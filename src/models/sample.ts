import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
  city: {
    type: String,
  },
  zip: {
    type: String,
  },
  loc: {
    type: Object,
  },
  pop: {
    type: Number,
  },
  state: {
    type: String,
  },
});

export default mongoose.model('zips', SampleSchema);
