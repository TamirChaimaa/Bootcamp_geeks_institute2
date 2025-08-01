import { useState } from 'react';

type FormValues = {
    email: string;
    password: string;
};

type FormErrors = {
    email?: string;
    password?: string;
};

const useForm = (callback: () => void) => {
    const [values, setValues] = useState<FormValues>({ email: '', password: '' });
    const [errors, setErrors] = useState<FormErrors>({});

    const validate = () => {
        const newErrors: FormErrors = {};

        if (!values.email.includes('@')) newErrors.email = 'Invalid email address';
        if (values.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) callback();
    };

    return { values, errors, handleChange, handleSubmit };
};

export default useForm;
