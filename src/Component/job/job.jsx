import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary } = job;
    return (
        <div>
            <div className="   bg-base-100 shadow-xl">
            <img src={logo} alt="Shoes" />
                <div className="">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <p>salary :{salary}</p>
                    <div className="card-actions ">
                        <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">Detais</button>
                        </Link>

                        
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Job;