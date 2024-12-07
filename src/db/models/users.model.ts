import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  addressId: mongoose.Schema.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, // simple email validation
  },
  phone: {
    type: String,
  },
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address', // 'Address' is another collection and model
  },
});

const Users = mongoose.model<IUser>('User', userSchema);

export default Users;
