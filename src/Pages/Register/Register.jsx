import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleImg from '../../assets/googleLogo.png'
const Register = () => {
    const { setUser, user, register, signInWithGoogle } = useContext(AuthContext)
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const { name, email, password, image } = Object.fromEntries(formData);
        if (!regex.test(password)) {
            toast.error('Password is too weak');
            return;
        }
        const imageFile = new FormData();
        imageFile.append('image', formData.get('image'));

        fetch('https://api.imgbb.com/1/upload?key=48b282cb34af9841dcce86814f69cd23', {
            method: 'POST',
            body: imageFile,
        })
            .then(res => res.json())
            .then(res => {
                register(email, password)
                    .then(data => {
                        setUser(data.user)
                        updateProfile(auth.currentUser, {
                            displayName: name, photoURL: res.data.url
                        })
                    })
                    .catch(err => {
                        if (err.code === 'auth/email-already-in-use') {
                            toast.error('Email already in use');
                            console.log('email in use');
                        } else {
                            console.log('Something went wrong use');
                            toast.error('Something went wrong');
                        }
                        console.log(err);
                    })
            })
            .catch(err => console.log(err))



        // e.target.reset()
    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then((userCredential) => {
                toast.success('User registered successfully');
                setUser(userCredential.user);
                navigate('/');
            })
            .catch(err => toast.error('Registration failed. Please try again'))
    }
    return (
        <div>
            <div className="flex py-20 justify-center items-center bg-base-200 ">
                <div className="p-16 card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <div>
                        <h2 className='text-center text-5xl pb-6'>Create new account</h2>
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
                        <div className="flex items-center justify-center ">
                            <p onClick={handleGoogleSignin} className=" btn bg-white border-none shadow-none hover:bg-white max-w-max">
                                <img className="w-8 " src={googleImg} alt="Google" />
                            </p>
                        </div>
                        <div className="form-control mt-5">
                            <button className="btn hover:bg-[#0c7d4a] bg-[#1a583c] text-white text-base">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;