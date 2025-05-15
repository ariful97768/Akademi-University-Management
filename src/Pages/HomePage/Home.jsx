import React from 'react';
import Banner from './Banner';
import TopScholarships from './TopScholarships';
import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import Reviews from './Reviews';
import LatestBlogs from './LatestBlogs';

const Home = () => {
    const data = useLoaderData()
    return (
        <section>
            <Banner />
            <TopScholarships data={data} />
            <Reviews />
            <Contact />
            <LatestBlogs />
        </section>
    );
};

export default Home;