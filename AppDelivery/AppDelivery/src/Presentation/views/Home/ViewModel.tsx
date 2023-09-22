import React, { useState } from 'react'

const HomeViewModel = () => {

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

export default HomeViewModel;
