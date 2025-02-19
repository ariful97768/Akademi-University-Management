import React from 'react';
import Banner from './Banner';

import TopScholarships from './TopScholarships';
import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';

const Home = () => {
    const data = useLoaderData()
    return (
        <section>
            <Banner />
            <TopScholarships data={data} />
            <Contact />
        </section>
    );
};

export default Home;