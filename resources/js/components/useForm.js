import { useState } from 'react';

const useForm = initial => {

    const [state, setState] = useState(initial);

    const handleChange = ev => {
        ev.persist();
        const { name, value } = ev.target;
        setState(state => ({ ...state, [name]: value }));
    };

    const handleClearForm = () => {
        setState(initial);
    };

    return [state, handleChange, handleClearForm];

}

export default useForm;