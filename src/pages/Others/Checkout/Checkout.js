import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutDetails from '../CheckoutDetails/CheckoutDetails';

const Checkout = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(course => <CheckoutDetails
                    key={course._id}
                    course={course}
                ></CheckoutDetails>)
            }

        </div>
    );
};

export default Checkout;