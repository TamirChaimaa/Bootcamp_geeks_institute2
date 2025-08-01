import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/dataSlice';
import type { RootState } from '../store';
import type { User } from '../types/types';

const DataFetcher: React.FC = () => {
    const dispatch = useDispatch<any>(); // or useDispatch<typeof store.dispatch>
    const { data, loading, error } = useSelector((state: RootState) => state.data);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map((user: User) => (
                <li key={user.id}>
                    <strong>{user.name}</strong> - {user.email}
                </li>
            ))}
        </ul>
    );
};

export default DataFetcher;
