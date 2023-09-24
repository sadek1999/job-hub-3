import { useLoaderData } from "react-router-dom";
import { getApplyedJobs } from "../utlity/SaveJobs"
import { useEffect, useState } from "react";



const Applied = () => {
  const [applyed, setApplyed] = useState([])
  const jobs = useLoaderData()

  useEffect(() => {
    const appliedJobs = getApplyedJobs();
    if (appliedJobs.length > 0) {
      const addjobs = [];
      for (const id of appliedJobs) {
        const a=jobs.find(job=>job.id===id)
        if(a){
          addjobs.push(a)
        }
      }
      // console.log(addjobs)
      setApplyed(addjobs)



      console.log(jobs, appliedJobs, applyed)
    }

  }, [])
//  console.log(applyed)
  return (
    <div>
      <h1 className="tex-5xl">This is applied jobs page</h1>
    </div>
  );
};

export default Applied;