"use client";
import {useState} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation' 
import Form from '@components/SpaceForm';

interface formResponse{
    title: string,
    desc: string,
}
const page = () => {
    const [submitting, setSubmitting] = useState<boolean>(false);
    const router : any = useRouter();
    const [Space, setSpace] = useState<formResponse>({title: '', desc: ''})
    const createSpace = async (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            console.log(Space);
            const response = await fetch('/api/Spaces/new', {method: 'POST', body: JSON.stringify ({ title : Space.title, desc: Space.desc})})
            if(response.ok){
                router.push('/home');
            }
        }catch(error){

        }
    }
    return (
      
        <Form type="create" Space={Space} setSpace={setSpace} submitting={submitting} handleSubmit={createSpace}/>
    )
}

export default page