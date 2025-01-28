import React from 'react';
import { Link } from 'react-router-dom';
import CardDetails from './ScholarshipCard';
import ScholarshipsCard from './ScholarshipCard';

const TopScholarships = ({ data }) => {
    return (
        <div className=' py-20 bg-[#f2f8f1]'>

            <h2 className='text-3xl font-bold text-center mb-10'>Here are some top scholarships for you</h2>    
            <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto gap-7 md:px-10'>
                {
                    data.map(d => <ScholarshipsCard key={d._id} scholarship={d} />)
                }

            </div>
            <div className='grid justify-center'>
                <Link to={'/all-scholarships'}> <button className='btn mt-11 bg-[#185137] text-white hover:bg-[#238358]'>View All Scholarships</button></Link>
            </div>
        </div>
    );
};

export default TopScholarships;