import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className=' py-20 bg-[#f2f8f1]'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 max-w-screen-2xl mx-auto gap-7 px-10'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='grid justify-center'>
               <Link to={'/all-scholarships'}> <button className='btn mt-11 bg-[#185137] text-white hover:bg-[#238358]'>View All Scholarships</button></Link>
            </div>
        </div>
    );
};

export default Cards;