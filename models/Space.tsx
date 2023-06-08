import { ObjectId } from 'mongodb';
import mongoose, {Schema, Model, model, models} from 'mongoose';


interface Space {
    creator: ObjectId;
    title: string;
    desc: string;
    projects: [{ type : ObjectId, ref: 'Project' }]; 
    members: [{type : ObjectId, ref: 'User'}]
}

interface SpaceModel extends Space, Document {}

const SpaceSchema : Schema<SpaceModel> = new Schema({
    creator : {
        type: ObjectId,
        ref: 'User'
    },
    title : {
        type: String,
        required: [true, "title is required"]
    },
    desc : { 
        type: String,
        required: [true, "description is required"]
    },
    projects : { 
        type: [{ type : ObjectId, ref: 'Project' }],
       
    },
    members: {
        type:[{type : ObjectId, ref: 'User'}]
    }
})

const Space: Model<SpaceModel> = models.Spaces as Model<SpaceModel> || model<SpaceModel>('Spaces', SpaceSchema);

export default Space;