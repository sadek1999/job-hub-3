import { useEffect, useState } from "react";
import Job from "../job/job";

const Jobs = () => {

    const [jobs,setjobs]=useState();
    useEffect(()=>{
        fetch(`jobs.json`)
        .then(res=>res.json())
        .then(data=>setjobs(data))
    },[])
    console.log(jobs)
    return (
        <div>
            <h1> jobs are  </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
                jobs?.map(job =><Job key={job.id} job={job}></Job>)
            }
            </div>
            
        </div>
    );
};

export default Jobs;