import React from 'react';
import useForm from '../hooks/useForm';

const RegisterForm = () => {
    const onSubmit = () => {
        alert('Form Submitted!');
    };

    const { values, errors, handleChange, handleSubmit } = useForm(onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input name="email" value={values.email} onChange={handleChange} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
