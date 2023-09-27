import React, { useState } from 'react'

const RegisterViewModel = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const onChanges = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    return {
        ...values,
        onChanges
    }
}

export default RegisterViewModel;
