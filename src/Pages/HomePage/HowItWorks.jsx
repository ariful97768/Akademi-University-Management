import { FaSearch } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import { ImStatsBars } from 'react-icons/im';
import { LuTrophy } from 'react-icons/lu';

const HowItWorks = () => {
  return (
    <section className='max-w-screen-2xl py-20 md:px-10'>
      <div className='p-14 rounded-lg text-white bg-[#14452F]'>
        <div className='text-center'>
          <p className='uppercase '>——— our process ———</p>
          <h2 className='font-bold text-6xl pb-12 pt-5'>How Akademi Works?</h2>
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <div className='group hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black h-[116px] w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-7 group-hover:p-5 rounded-full transition-all duration-300 bg-white'><FaSearch className='' /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-2xl'>Browse Scholarships</h3>
              <p className='leading-7 text-base'>Easily explore available scholarships based on your profile.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-12 h-12 flex items-center justify-center rounded-full mx-auto text-xl'>1</p>
            </div>
          </div>
          <div className='group hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black h-[116px] w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-7 group-hover:p-5 rounded-full transition-all duration-300 bg-white'><GrDocumentText /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-2xl'>Apply Online</h3>
              <p className='leading-7 text-base'>Submit applications with just a few clicks, no paperwork.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-12 h-12 flex items-center justify-center rounded-full mx-auto text-xl'>2</p>
            </div>
          </div>
          <div className='group hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black h-[116px] w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-7 group-hover:p-5 rounded-full transition-all duration-300 bg-white'><ImStatsBars /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-2xl'>Track Status</h3>
              <p className='leading-7 text-base'>Get real-time updates on your application progress.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-12 h-12 flex items-center justify-center rounded-full mx-auto text-xl'>3</p>
            </div>
          </div>
          <div className='group hover:cursor-pointer px-5'>
            <div className='flex justify-center items-center text-black h-[116px] w-[116px] rounded-full border-2 border-white mx-auto'>
              <div className='text-6xl p-7 group-hover:p-5 rounded-full transition-all duration-300 bg-white'><LuTrophy /></div>
            </div>
            <div className='text-center flex flex-col gap-3 mt-7'>
              <h3 className='font-bold text-2xl'>Receive Awards</h3>
              <p className='leading-7 text-base'>Get notified instantly when you're selected for a scholarship.</p>
              <p className='bg-[#7CFF77] text-[#14452F] w-12 h-12 flex items-center justify-center rounded-full mx-auto text-xl'>4</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;