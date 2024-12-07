import mongoose, { Document, Schema } from 'mongoose';

interface IUserRoleMapping extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  roleId: mongoose.Schema.Types.ObjectId;
}

const userRoleMappingSchema = new Schema<IUserRoleMapping>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role', // Reference to the Role model
    required: true,
  },
});

// Explicitly set the collection name (without pluralization)
const UserRoleMapping = mongoose.model<IUserRoleMapping>('user_role_mapping', userRoleMappingSchema, 'user_role_mapping');

export default UserRoleMapping;
