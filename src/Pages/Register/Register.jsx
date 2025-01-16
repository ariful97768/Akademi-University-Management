const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { name, email, password, image } = Object.fromEntries(formData);
        console.log(name, email, password, image);
        e.target.reset()
    }
    return (
        <div>
            <div className="flex py-20 justify-center items-center bg-base-200 ">
                <div className="p-16 card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <div>
                        <h2 className='text-center text-5xl p-2'>Create new account</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body p-0">
                        <div className="form-control">
                            <input name='name' type="text" placeholder="Name" className=" placeholder:text-[#22281E] border-b-2 border-black border-opacity-70 py-3 focus:outline-none placeholder:text-opacity-70" required />
                        </div>
                        <div className="form-control">
                            <input name='email' type="email" placeholder="Email" className=" placeholder:text-[#22281E] border-b-2 border-black border-opacity-70 py-3 focus:outline-none placeholder:text-opacity-70" required />
                        </div>
                        <div className="form-control">
                            <input name='password' type="password" placeholder="Password" className="placeholder:text-[#22281E] border-b-2 border-black border-opacity-70 py-3 focus:outline-none placeholder:text-opacity-70" required />
                        </div>
                        <div className="form-control">
                            <input name='image' type="file" placeholder="Select your profile photo" className="placeholder:text-[#22281E] border-b-2 border-black border-opacity-70 py-3 focus:outline-none placeholder:text-opacity-70" required />
                        </div>
                        <div>
                            <h3 className="text-sm py-3">Already have and account? <a className="hover:border-b border-black" href="/login">Login</a></h3>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#0c7d4a] bg-[#1a583c] text-white text-base">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;