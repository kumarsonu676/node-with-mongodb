import mongoose, { Document, Schema } from 'mongoose';

interface IAddress extends Document {
  addressLine1: string;
  city: string;
}

const addressSchema = new Schema<IAddress>({
  addressLine1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model<IAddress>('address', addressSchema, 'address'); // Explicitly set the collection name (without pluralization)

export default Address;
