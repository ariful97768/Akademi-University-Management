import React from 'react';
import Banner from './Banner';
import TopScholarships from './TopScholarships';
import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import Reviews from './Reviews';
import LatestBlogs from './LatestBlogs';
import NewsLetter from './NewsLetter';
import FAQ from './FAQ';

const Home = () => {
    const data = useLoaderData()
    return (
        <section>
            <Banner />
            <TopScholarships data={data} />
            <Reviews />
            <Contact />
            <LatestBlogs />
            <NewsLetter />
            <FAQ/>
        </section>
    );
};

export default Home;