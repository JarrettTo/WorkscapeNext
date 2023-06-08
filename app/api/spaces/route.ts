import { connectToDB} from '@utils/database';

import Job from '@models/Job';
export const GET = async (req: any, res: any) =>{

    try{
        await connectToDB();
        const jobs = await Job.find({})
        console.log(jobs);
        return new Response(JSON.stringify(jobs), {status : 200})
    }catch (error){
        console.error(error);
        return new Response("Failed to fetch jobs", {status: 500})
    }
}