import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';

const AllUser = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/all-users/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => toast.error('Something went wrong. Please try again later'))
    }, [user])

    const handleDelete = id => {
        fetch(`http://localhost:5000/delete-user/${id}?email=${user?.email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('User deleted successfully')
            })
            .catch(err => toast.error('Something went wrong. Please try again later'))
    }

    const handleRole = (e, id) => {

        console.log(e.target.value, id);
        fetch(`http://localhost:5000/update-role/${id}?role=${e.target.value}&email=${user?.email}&`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Role updated successfully')
            })
            .catch(err => toast.error('Something went wrong. Please try again later'))
    }

    return (
        <section className='max-w-screen-lg mx-auto py-14'>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>User Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((item) =>
                                <tr>
                                    <td>
                                        <h2 className="font-bold text-lg">{user?.displayName}</h2>
                                    </td>
                                    <td className='text-base'>
                                        {user.email}
                                    </td>
                                    <td className='text-base'>
                                        <select onChange={e => handleRole(e, item._id)} name="role" defaultValue={item.role} className='text-center'>
                                            <option value="user">User</option>
                                            <option value="moderator">Moderator</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn font-normal btn-error text-white btn-sm">Delete user</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUser;