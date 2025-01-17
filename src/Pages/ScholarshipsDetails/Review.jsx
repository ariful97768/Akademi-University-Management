import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
const Review = () => {
    return (
        <div className='space-y-3 mt-5'>
            <div className='space-y-3 my-6'>
                <h2 className='border-b-2 border-[black] max-w-max px-2'>Add Review</h2>
                <div className='flex gap-5'>
                    <input placeholder='Name' className='input input-bordered' type="text" name="name" id="" />
                    <ReactStars count={5}
                        size={28}
                        isHalf={true}
                        activeColor="#ffd700" />
                </div>
                <textarea placeholder='Give a review' className='w-full rounded-lg h-20 p-3' name="review" id=""></textarea>
                <button className="btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7">Submit</button>

            </div>
            <div className='border-2 p-5 bg-white rounded-xl space-y-3'>
                <ReactStars count={5}
                    size={28}
                    isHalf={true}
                    value={4.5}
                    edit={false}
                    activeColor="#ffd700" />
                <div className='flex items-center gap-3'>
                    <img className='w-10 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                    <h2>Ariful Islam</h2>
                    <p className='flex items-center gap-2 pl-3'> <FaRegCalendarAlt />25-12-2025</p>
                </div>
                <div>
                    <p className=''>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum maxime, nulla nihil voluptas obcaecati ratione doloremque unde. Sunt modi quia unde. Animi a minima nostrum ut quos iusto quidem laborum?
                    </p>
                </div>
            </div>
            <div className='border-2 p-5 bg-white rounded-xl space-y-3'>
                <ReactStars count={5}
                    size={28}
                    isHalf={true}
                    value={4.5}
                    edit={false}
                    activeColor="#ffd700" />
                <div className='flex items-center gap-3'>
                    <img className='w-10 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                    <h2>Ariful Islam</h2>
                    <p className='flex items-center gap-2 pl-3'> <FaRegCalendarAlt />25-12-2025</p>
                </div>
                <div>
                    <p className=''>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum maxime, nulla nihil voluptas obcaecati ratione doloremque unde. Sunt modi quia unde. Animi a minima nostrum ut quos iusto quidem laborum?
                    </p>
                </div>
            </div>
            <div className='border-2 p-5 bg-white rounded-xl space-y-3'>
                <ReactStars count={5}
                    size={28}
                    isHalf={true}
                    value={4.5}
                    edit={false}
                    activeColor="#ffd700" />
                <div className='flex items-center gap-3'>
                    <img className='w-10 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                    <h2>Ariful Islam</h2>
                    <p className='flex items-center gap-2 pl-3'> <FaRegCalendarAlt />25-12-2025</p>
                </div>
                <div>
                    <p className=''>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum maxime, nulla nihil voluptas obcaecati ratione doloremque unde. Sunt modi quia unde. Animi a minima nostrum ut quos iusto quidem laborum?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;