import React from 'react';
import Form from '../components/Form';

const FormContact = ({initialValues, validate}) => {

    const [values, setValues] = React.useState(initialValues);

    const [errors, setErrors] = React.useState({});

    const [touched, setTouched] = React.useState({});

    const handleChange = evt => {
        const {name, value} = evt.target;

        setValues({
            ...values,
            [name] : value,
        });

        setTouched({
            ...touched,
            [name] : true,
        });
    };


    const handleSubmit = evt => {
        evt.preventDefault();

        const formValidation = Object.keys(values).reduce(
            (acc, key) => {

                const newError = validate[key] (values[key]);
                const newTouched = { [key] : true };

                return {

                    errors : {
                        ...acc.errors,
                        ...(newError && { [key] : newError}),
                    },

                    touched : {
                        ...acc.touched,
                        ...newTouched,
                    },

                };

            },

            {

                errors: { ...errors },
                touched: {...touched }

            },

        );

        setErrors(formValidation.errors);
        setTouched(formValidation.touched);


        if (
            !Object.values(formValidation.errors).length && 
            Object.values(formValidation.touched).length ===
            Object.values(values).length && 
            Object.values(formValidation.touched).every(t => t === true)
        ) {
            alert(JSON.stringify(values, null, 2));
        }


    };

    return (
        <>

            <Form 

                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                touched={touched}
                values={values}
            />

        </>
    )
}

export default FormContact
