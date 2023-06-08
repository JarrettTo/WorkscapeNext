import mongoose, { ConnectOptions } from 'mongoose';

let isConnected : boolean = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI || "wow", {
            dbName: "workscape",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)
        
        isConnected=true;
        console.log("MongoDB connected");
    } catch (error : any){
        console.error(error);
    }
}