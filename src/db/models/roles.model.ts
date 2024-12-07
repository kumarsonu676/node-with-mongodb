import mongoose, { Schema, Document } from 'mongoose';

interface IRole extends Document {
  name: string;
  description: string;
}

const roleSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

const Roles = mongoose.model<IRole>('Role', roleSchema);

export default Roles;
