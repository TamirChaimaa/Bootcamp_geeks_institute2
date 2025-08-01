import useDataFetching from '../hooks/useDataFetching';

const UserList = () => {
    const { data, loading, error, refetch, invalidateCache } = useDataFetching<any[]>(
        'https://jsonplaceholder.typicode.com/users',
        5 * 60 * 1000 
    );

    return (
        <div>
            <h3>Users</h3>
            <button onClick={refetch}>Refresh</button>
            <button onClick={invalidateCache}>Clear Cache & Refresh</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && (
                <ul>
                    {data.map(user => (
                        <li key={user.id}>{user.name} ({user.email})</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
