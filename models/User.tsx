import { ObjectId } from 'mongodb';
import mongoose, {Schema, Model, model, models} from 'mongoose';
import { StringLiteral } from 'typescript';


interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    spaces: [{ type : ObjectId, ref: 'Space' }]; 
}

interface UserModel extends User, Document {}

const UserSchema : Schema<UserModel> = new Schema({
    firstName : {
        type: String,
        required: [true, "first name is required"]
    },
    lastName : {
        type: String,
    
    },
    email : { 
        type: String,
        required: [true, "email is required"]
    },
    password: { 
        type: String,
        required: [true, "password is required"]
    },
    spaces : { 
        type: [{ type : ObjectId, ref: 'Space' }],
    
    },
 
})

const User: Model<UserModel> = models.Users as Model<UserModel> || model<UserModel>('Users', UserSchema);

export default User;