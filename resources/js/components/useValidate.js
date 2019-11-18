// import useEffect and useState from react
// we don't need to import React because we aren't returning any jsx in this component
import { useEffect, useState } from "react";

// values comes from our form component via our useForm hook
const useValidate = values => {

    // state
    const [errors, setErrors] = useState({
        isValidFirstName: false,
        isValidLastName: false,
        isValidPhone: false,
        isValidTitle: false
    });

    const { fname, lname, phone, title } = values;

    // function to validate inputs
    // useEffect replaces componentDidMount/DidUpdate/WillUnmount and runs only when it's dependencies change
    useEffect(() => {
        // comparing our values to a regEx
        const firstNameMatch = /^(?=[a-zA-Z]{2,}$).*/.test(fname);
        const lastNameMatch = /^(?=[a-zA-Z]{2,}$).*/.test(lname);
        const phoneMatch = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone);
        const titleMatch = /^(?=[0-9a-zA-Z#@$?]{3,}$).*/.test(title);

        // const errorChecker = () => {
        //     switch (true) {
        //         case firstNameMatch:
        //             setErrors((errors => ({ ...errors, isValidFirstName: true })));
        //             break;
        //         case !firstNameMatch:
        //             setErrors((errors => ({ ...errors, isValidFirstName: false })));
        //         case lastNameMatch:
        //             setErrors((errors => ({ ...errors, isValidLastName: true })));
        //             break;
        //         case !lastNameMatch:
        //             setErrors((errors => ({ ...errors, isValidLastName: false })));
        //             break;
        //         case phoneMatch:
        //             setErrors((errors => ({ ...errors, isValidPhone: true })));
        //             break;
        //         case !phoneMatch:
        //             setErrors((errors => ({ ...errors, isValidPhone: false })));
        //             break;
        //         case titleMatch:
        //             setErrors((errors => ({ ...errors, isValidTitle: true })));
        //             break;
        //         case !titleMatch:
        //             setErrors((errors => ({ ...errors, isValidTitle: false })));
        //             break;
        //         default:
        //             setErrors((errors => ({
        //                 ...errors,
        //                 isValidFirstName: false,
        //                 isValidLastName: false,
        //                 isValidPhone: false,
        //                 isValidTitle: false
        //             })));
        //     }
        // };

        // if the fname input is not empty and it matches our regEx set isValidFirstName to true
        if (fname && firstNameMatch) {
            setErrors((errors => ({ ...errors, isValidFirstName: true })));
            // if the fname input does not match our regEx set isValidFirstName to false
        } else if (!firstNameMatch) {
            setErrors((errors => ({ ...errors, isValidFirstName: false })));
        }

        // if the lname input is not empty and it matches our regEx set isValidLastName to true
        if (lname && lastNameMatch) {
            setErrors((errors => ({ ...errors, isValidLastName: true })));
            // if the lname input does not match our regEx set isValidLastName to false
        } else if (!lastNameMatch) {
            setErrors((errors => ({ ...errors, isValidLastName: false })));
        }

        // if the phone input is not empty and it matches our regEx set isValidPhone to true
        if (phone && phoneMatch) {
            setErrors((errors => ({ ...errors, isValidPhone: true })));
            // if the phone input does not match our regEx set isValidPhone to false
        } else if (!phoneMatch) {
            setErrors((errors => ({ ...errors, isValidPhone: false })));
        }

        // if the title input is not empty and it matches our regEx set isValidTitle to true
        if (title && titleMatch) {
            setErrors((errors => ({ ...errors, isValidTitle: true })));
            // if the title input does not match our regEx set isValidTitle to false
        } else if (!titleMatch) {
            setErrors((errors => ({ ...errors, isValidTitle: false })));
        }

        // errorChecker();

        // useEffect's dependencies array
        // if we want it to run just once (like componentDidMount) we would pass an empty array here
    }, [values]);

    // function to set errors to false when we submit our form
    const resetValidate = () => {
        setErrors((errors => ({ ...errors, isValidFirstName: false })));
        setErrors((errors => ({ ...errors, isValidLastName: false })));
        setErrors((errors => ({ ...errors, isValidPhone: false })));
        setErrors((errors => ({ ...errors, isValidTitle: false })));
    };

    // returning the state of errors and our resetValidate function to the component we call this hook from
    return [errors, resetValidate];

};

export default useValidate;