import { connectToDB} from '@utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import Job from '@models/Space';
export const POST = async (req: any) =>{

    const {title, desc} = await req.json();
    console.log(req.body);
    console.log(desc);

    try{
        await connectToDB();
        const newJob = new Job({ creator: 1, title : title, desc: desc});
        await newJob.save();
        return new Response(JSON.stringify(newJob), {status : 201})
    }catch (error){
        console.error(error);
        return new Response("Failed to create a job", {status: 500})
    }
}