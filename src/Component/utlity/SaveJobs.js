const getApplyedJobs=()=>{
    const appliedjobs=localStorage.getItem('jobs');
    if(appliedjobs){
        return JSON.parse(appliedjobs)
    }
    return [];
}


const saveAppliedjobs=id=>{
    const appliedJobs=getApplyedJobs();
    const exists=appliedJobs.find(jobid=>jobid===id);
    if(!exists){
        appliedJobs.push(id);
        localStorage.setItem('jobs',JSON.stringify(appliedJobs))
    }

    
}
export  {saveAppliedjobs,getApplyedJobs};