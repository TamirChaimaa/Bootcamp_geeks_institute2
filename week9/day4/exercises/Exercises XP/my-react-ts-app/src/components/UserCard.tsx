import React from 'react';

interface UserCardProps {
    name?: string;
    age?: number;
    role?: string;
}

const UserCard: React.FC<UserCardProps> = ({
    name = 'Anonymous',
    age = 0,
    role = 'Guest',
}) => {
    return (
        <div style={{ border: '1px solid gray', padding: '1rem', borderRadius: '8px' }}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
        </div>
    );
};

export default UserCard;
