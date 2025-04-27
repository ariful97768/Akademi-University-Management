import React from 'react';
import Banner from './Banner';
import TopScholarships from './TopScholarships';
import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import Reviews from './Reviews';

const Home = () => {
    const data = useLoaderData()
    return (
        <section>
            <Banner />
            <TopScholarships data={data} />
            <Reviews />
            <Contact />
        </section>
    );
};

export default Home;