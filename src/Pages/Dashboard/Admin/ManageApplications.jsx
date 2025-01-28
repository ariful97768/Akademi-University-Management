import React, { useEffect, useState } from 'react';
import useRole from '../../../Hooks/useRole';
import { FaCircleInfo } from 'react-icons/fa6';
import { BiSolidMessageError } from 'react-icons/bi';
import { RiIndeterminateCircleFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const ManageApplications = () => {
    const { user } = useRole()
    const [data, setData] = useState([])
    const [modalData, setModalData] = useState({})
    const [refetch, setRefetch] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/all-application?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [user, refetch])

    const handleFeedback = (e, id) => {
        e.preventDefault()
        fetch(`http://localhost:5000/update-feedback/${id}?email=${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback: e.target.feedback.value })
        })
            .then(res => res.json())
            .then(res => {
                if (res.matchedCount > 0) {
                    toast.success('Feedback sent to the user.')
                }
            })
            .catch(err => toast.error('Oops! Something went wrong'))

        e.target.reset()
        document.getElementById('my_modal_2').checked = false
        setRefetch(!refetch)
    }

    const handleReject = (id, item) => {

        if(item.status==='Rejected'){
            return toast.error('Application already rejected')
        }

        fetch(`http://localhost:5000/update-feedback/${id}?email=${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Rejected' })
        })
            .then(res => res.json())
            .then(res => {
                if (res.matchedCount > 0) {
                    toast.success('Application rejected.')
                }
                setRefetch(!refetch)
            })
            .catch(err => toast.error('Something bad happened! Rejection unsuccessful'))
    }

    return (
        <section className='bg-[#f2f8f1] h-full py-14'>
            <div className="overflow-x-auto">
                {
                    data.length > 0 ?
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>User name</th>
                                    <th>University name</th>
                                    <th>Scholarship title</th>
                                    <th>Applied Degree</th>
                                    <th>Status</th>
                                    <th>Applied date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => <tr key={item._id}>
                                        <th>{item.userName}</th>
                                        <td>{item.universityName}</td>
                                        <td>{item.scholarshipName}</td>
                                        <td>{item.degree}</td>
                                        <td>{item.status === 'Pending' ? <span className='text-white bg-yellow-500 px-2 py-1 rounded-xl'>{item.status}</span> : item.status === 'Rejected' ? <span className='text-white bg-red-500 px-2 py-1 rounded-xl'>{item.status}</span> : item.status === 'Approved' && <span className='text-white bg-green-500 px-2 py-1 rounded-xl'>{item.status}</span>}</td>
                                        {/* typo used data instead of date */}
                                        <td>{item.appliedData}</td>
                                        <td>
                                            <label onClick={() => setModalData(item)} className="btn btn-ghost btn-xs"><FaCircleInfo /></label>
                                            <label onClick={() => setModalData(item)} htmlFor='my_modal_2' className="btn btn-ghost btn-xs"><BiSolidMessageError /></label>
                                            <label onClick={() => handleReject(item._id, item)} className="btn btn-ghost btn-xs text-red-600"><RiIndeterminateCircleFill /></label>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        :
                        <div>
                            <h2 className='text-4xl font-bold text-center'>No data available</h2>
                        </div>
                }
                <input type="checkbox" id={`my_modal_2`} className="modal-toggle" />
                <div className="modal" role="dialog">
                    <form onSubmit={e => handleFeedback(e, modalData._id)} className="modal-box">
                        <h2 className='text-center py-5 mb-7 font-bold text-2xl'>Send a Feedback to the user</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='col-span-1 flex flex-col gap-5'>
                                <label className="form-control text-start w-full max-w-xl">
                                    <span className="label-text">User name</span>
                                    <input value={modalData?.userName} name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
                                </label>
                                <label className="form-control text-start w-full max-w-xs">
                                    <span className="label-text">Scholarship title</span>
                                    <input value={modalData?.scholarshipName} name='scholarshipName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </label>
                            </div>
                            <div className='col-span-1 flex flex-col gap-5'>
                                <label className="form-control text-start w-full max-w-xs">
                                    <span className="label-text">University name</span>
                                    <input value={modalData?.universityName} name='universityName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <label className="form-control text-start w-full max-w-xs">
                                    <span className="label-text">Applied date</span>
                                    <input value={modalData?.appliedData} type="text" name="" id="" className="input input-bordered" />
                                </label>
                            </div>
                            <div className='col-span-2'>
                                <label className="form-control text-start w-full max-w-xl">
                                    <span className="label-text">Give a Feedback</span>
                                    <textarea placeholder='Enter your review' className='input w-full max-w-xl p-2 input-bordered h-28' name="feedback" id=""></textarea>
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-7 justify-center items-center'>
                            <button className="btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7">Send</button>
                            <label htmlFor={`my_modal_2`} className="btn transition duration-300 hover:bg-[#ff3535] hover:text-[#ffffff] bg-[#d12525] text-white px-7">Cancel</label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ManageApplications;