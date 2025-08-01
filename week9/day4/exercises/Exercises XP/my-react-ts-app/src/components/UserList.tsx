import React, { use, useEffect, useState } from "react";

interface User {
    id : number;
    name : string;
    email : string;
    phone : string;
}

const UserList : React.FC = () => {
    const [users , setUsers] = useState<User[]>([]);
    const [loading , setLoading] = useState<boolean>(true);
    const [error , setError] = useState<string | null> (null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch ('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) throw new Error('failed to fatch users');
                const data : User[] = await response.json();
                setUsers(data);
                setError(null);
            }catch (err : unknown){
                if (err instanceof Error) {
                    setError(err.message);
                }else{
                    setError ('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>User List :</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <b>{user.name}</b> – {user.email} – {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;
