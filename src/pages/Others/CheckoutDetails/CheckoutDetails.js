import { Card } from 'flowbite-react';
import React from 'react';

const CheckoutDetails = ({ course }) => {
    const { name, picture } = course;
    return (
        <div className="max-w-sm mx-auto my-20">
            <h2 className='text-3xl mb-4 text-gray-900 dark:text-white'>Congratulations,<br /> You got Premium access of: </h2>
            <Card
                horizontal={true}
                imgSrc={picture}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
            </Card>
        </div>
    );
};

export default CheckoutDetails;