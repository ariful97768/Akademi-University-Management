import faqImg from '../../assets/New-Icon-IMG-4.jpg';

const FAQ = () => {
    return (
        <section className='flex gap-14 max-w-screen-2xl py-20 md:px-10 bg-[#F2F8F1]'>
            <div className='w-full md:max-w-[50%]'>
                <div>
                    <p className='mb-5 uppercase text-[#14452F]'>——— Ask questions</p>
                    <h3 className='text-5xl font-bold mb-12 leading-[58px]'>Uncover your potential with <span className='text-[#14452F]'>Our</span> assistance</h3>
                </div>
                <div className='relative'>
                    <img className='rounded-lg' src={faqImg} alt="" />
                    <div className='absolute bottom-0 m-7 flex justify-center items-center gap-10 p-8 max-w-max bg-white rounded-lg '>
                        <div className='mr-10'>
                            <h3 className='font-bold text-3xl mb-4 text-[#22281E]'>Still Have Questions?</h3>
                            <p className='text-[#394630] leading-7'>Enim sit amet venenatis urna. Donec massa sapien faucibus et molestie ac feugiat.</p>
                        </div>
                        <button className='btn transition-colors duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white'>Get In Touch</button>
                    </div>
                </div>
            </div>
            <div className='w-full md:max-w-[50%] my-auto'>
                <div className='flex flex-col gap-7'>
                    <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                        <div className="collapse-content">
                            <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                        <div className="collapse-content">
                            <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                        <div className="collapse-content">
                            <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                        <div className="collapse-content">
                            <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                        <div className="collapse-content">
                            <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow px-5 rounded-md py-2 bg-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How Much Does It Cost?</div>
                        <div className="collapse-content">
                            <p>Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus urna duis convallis. At urna condimentum mattis pellentesque id nibh tortor id.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;