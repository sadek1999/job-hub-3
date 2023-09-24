import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {saveAppliedjobs} from '../utlity/SaveJobs'


const Details = () => {
    const jobs =useLoaderData()
    const{id}=useParams()
    const idInt=parseInt(id)
    const job = jobs.find(job=>job.id===idInt)
    const{job_description,job_responsibility,experiences,educational_requirements,phone,email,address,salary,job_title}=job;
    const saveId=()=>{
       toast('successfully add the job')
       saveAppliedjobs(idInt)
    }
    // console.log(jobs,id,job)
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 border">
                    <h1>{job_responsibility}</h1>
                    <p>{job_description}</p>
                    <p>{experiences}</p>
                    <p>{educational_requirements}</p>
                </div>
                <div className="border">
                    <h1>{job_title}</h1>
                    <p>{salary}</p>
                    <button onClick={saveId} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;