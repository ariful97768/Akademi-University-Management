import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useRole = () => {
    const [role, setRole] = useState('user');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const { user, loader } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                });
        }
    }, [user?.email]);

    return { user, loader, role, loading, error };
};

export default useRole;
