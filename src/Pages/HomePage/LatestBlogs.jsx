import React from 'react';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { FaFolder } from 'react-icons/fa';
import blogImg1 from '../../assets/new-Blog-3-JPG.webp';
import blogImg2 from '../../assets/new-Blog-7-JPG.webp';
import blogImg3 from '../../assets/new-Blog-8-JPG.webp';
import bgImg from '../../assets/Grid-Blog-image-1.png'
import blogFeatureImg from '../../assets/Grid-Blog-image-2.webp';
import { Link } from 'react-router-dom';
const LatestBlogs = () => {
    return (
        <section className='xl:flex gap-10 justify-center max-w-screen-2xl py-20 md:px-10  bg-base-300'>
            <div style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat" }} className='row-span-3 rounded-md max-h-[970px] flex flex-col justify-end gap-5 w-1/2'>
                <div className='p-12 pb-10 grid gap-5'>
                    <p className=''>——— NOW TRENDING</p>
                    <h3 className='text-5xl font-bold'>News & Blog on Lms</h3>
                    <p className=''>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis et malesuada fames ac ante ipsum primis in faucibus. Vestibu tium.</p>
                </div>
                <img src={blogFeatureImg} alt="Blog Feature Img" />
            </div>
            <div className='w-1/2 flex flex-col gap-11 my-auto'>
                <div className='flex group max-h-max gap-3'>
                    <div className='max-h-64 max-w-60 rounded-md overflow-hidden'>
                        <img className='object-cover h-full w-full  group-hover:scale-105 duration-500 transition-transform' src={blogImg1} alt="Blog-Image" />
                    </div>
                    <div className='max-h-max px-9'>
                        <p className='flex gap-2 text-sm mb-3'><span className='flex gap-2 items-center'><FaFolder />DEVELOPMENT</span> <span className='flex gap-2 items-center'><BiSolidMessageRounded />{1} COMMENT</span></p>
                        <h3 className='text-3xl mb-4'>World Wide Business Logo Design</h3>
                        <p className=''>Pudes at tellus at urna. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat.</p>
                        <button className='btn mt-9  transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>View More</button>
                    </div>
                </div>
                <hr />
                <div className='flex group max-h-max gap-3'>
                    <div className='max-h-64 max-w-60 rounded-md overflow-hidden'>
                        <img className='object-cover h-full w-full  group-hover:scale-105 duration-500 transition-transform' src={blogImg2} alt="Blog-Image" />
                    </div>
                    <div className='max-h-max px-9'>
                        <p className='flex gap-2 text-sm mb-3'><span className='flex gap-2 items-center'><FaFolder />DEVELOPMENT</span> <span className='flex gap-2 items-center'><BiSolidMessageRounded />{1} COMMENT</span></p>
                        <h3 className='text-3xl mb-4'>World Wide Business Logo Design</h3>
                        <p className=''>Pudes at tellus at urna. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat.</p>
                        <button className='btn mt-9  transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>View More</button>
                    </div>
                </div>
                <hr />
                <div className='flex group max-h-max gap-3'>
                    <div className='max-h-64 max-w-60 rounded-md overflow-hidden'>
                        <img className='object-cover h-full w-full  group-hover:scale-105 duration-500 transition-transform' src={blogImg3} alt="Blog-Image" />
                    </div>
                    <div className='max-h-max px-9'>
                        <p className='flex gap-2 text-sm mb-3'><span className='flex gap-2 items-center'><FaFolder />DEVELOPMENT</span> <span className='flex gap-2 items-center'><BiSolidMessageRounded />{1} COMMENT</span></p>
                        <h3 className='text-3xl mb-4'>World Wide Business Logo Design</h3>
                        <p className=''>Pudes at tellus at urna. Orci eu lobortis elementum nibh tellus molestie. Blandit Maecenas volutpat.</p>
                        <button className='btn mt-9  transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;