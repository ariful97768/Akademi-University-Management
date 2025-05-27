import newsLetterImg from '../../assets/newsletter-img-2048x1738.webp';
const NewsLetter = () => {
    return (
        <section>
            <div className='flex flex-col gap-5 md:flex-row justify-center items-center px-10 py-20'>
                <div className='md:w-1/2 flex justify-center'>
                    <img className='max-w-[500px] w-full' src={newsLetterImg} alt="News Letter" />
                </div>
                <div className='md:w-1/2'>
                    <p className='mb-5 uppercase text-[#14452F]'>——— Subscribe</p>
                    <h3 className='text-5xl font-bold mb-4'>Sign Up <span className='text-[#14452F] underline'>Our</span> NewsLetter</h3>
                    <p className='text-[#394630] leading-7'>Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Quam elementum pulvinar etiam non quam lacus suspendisse. Ut placerat orci nulla pellentesque dignissim.</p>
                    <div className='flex flex-col gap-5 mt-10 relative max-w-max'>
                        <input className='px-5 pr-24 py-4 bg-base-100 border border-opacity-35 rounded-lg w-full max-w-[420px] lg:max-w-[420px] xl:max-w-[520px] transition-colors duration-500 outline-none focus:border-[#14452f] border-[#394630]' type="email" name="email" placeholder='Enter your email address' />
                        <button className='btn z-10 absolute right-1 top-1 transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>Submit</button>
                        <p className='text-[#394630] opacity-90'>We respect your privacy, Unsubscribe at anytime.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;