import React, { useState, useMemo } from 'react';
import SuccessContext from './index';

const SuccessProvider = ({ children }) => {

    const [successInfo, setSuccessInfo] = useState({
        isSuccess: false,
        name: ""
    });

    const successValue = useMemo(() => ({ successInfo, setSuccessInfo }), [successInfo, setSuccessInfo]);

    return (
        <SuccessContext.Provider value={successValue}>
            {children}
        </SuccessContext.Provider>
    );
};

export default SuccessProvider;