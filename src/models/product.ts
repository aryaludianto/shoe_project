import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  brand: { type: String },
  name: { type: String },
  category: { type: String },
  gender: { type: String },
  type: { type: String },
  price: { type: Number },
  stock: [
    {
      color: String,
      size: [{ number: Number, amount: Number }],
      imageUrl: [String],
    },
  ],
});

export default mongoose.model('products', ProductSchema);
