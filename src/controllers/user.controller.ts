import { Request, Response } from 'express';
import Roles from '../db/models/roles.model';
import Users from '../db/models/users.model';
import UserRoleMapping from '../db/models/users-role-maping.model';
import Address from '../db/models/address.model';

export default {
  async get(req: Request, res: Response) {
    // const users = await Users.find({}, { _id: 0, addressId: 0 });
    // const roles = await Roles.find({}, { _id: 0 });
    // const mappings = await UserRoleMapping.find({}, { _id: 0 });
    // const address = await Address.find({}, { _id: 0 });

    const users = await Users.aggregate([
      {
        $lookup: {
          from: 'address', // Name of the collection to join with
          localField: 'addressId', // Field in the 'users' collection to match
          foreignField: '_id', // Field in the 'address' collection to match
          as: 'address', // The name of the field to store the resulting documents
        },
      },
      {
        $unwind: {
          path: '$address', // Unwind the 'address' array
          preserveNullAndEmptyArrays: true, // Keep documents even if 'address' is null or empty
        },
      },
      {
        $project: {
          username: 1, // Include 'username' field
          age: 1, // Include 'age' field
          'address.addressLine1': 1, // Include 'address.addressLine1' field
        },
      },
    ]);

    return res.status(200).send(users);
  },
};
