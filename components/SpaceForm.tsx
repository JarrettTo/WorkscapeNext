import React from 'react'

interface FormProps {
    type: string;
    Space: { title: string; desc: string }; // Define the shape of the post state
    setSpace: React.Dispatch<React.SetStateAction<{ title: string; desc: string }>>; // Define the setter function type
    submitting: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SpaceForm: React.FC<FormProps> = ({type, Space, setSpace, submitting, handleSubmit}) => {
    

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div>{type} Space</div>
        <span>Title</span>
        <textarea value={Space.title} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=> setSpace(prevSpace => ({ ...prevSpace, title: e.target.value }))}/>
        <span>Description</span>
        <textarea value={Space.desc} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=> setSpace(prevSpace => ({ ...prevSpace, desc: e.target.value }))}/>
        <button type="submit" disabled={submitting}>Submit</button>
        </form>
        </>
    )
}

export default SpaceForm