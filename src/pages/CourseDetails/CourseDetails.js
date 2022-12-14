import { Button, Card } from 'flowbite-react';
import React, { useRef } from 'react';
import { FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useReactToPrint } from 'react-to-print';

const ref = React.createRef();
const CourseDetails = ({ course }) => {
    const { name, about, picture, price, category_id } = course;

    const componentRef = useRef();
    const handlePdf = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Course',
        onAfterPrint: () => alert('React to pdf success!!!')
    })


    return (

        <div ref={componentRef}>
            <Card class=" bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border md:m-10">
                <div className='flex justify-between border-b'>

                    <div className='flex gap-2 dark:text-white text-black mb-3'>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                    <div className='mb-3' >

                        <Button onClick={handlePdf} gradientDuoTone="purpleToBlue">
                            Download pdf
                        </Button>
                    </div>

                </div>
                <img class="p-8 rounded-t-lg md:h-96 md:w-3/4 mx-auto" src={picture} alt="course pic" />
                <h2 class="text-3xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h2>
                <div class="px-5 pb-5">


                    <div class="md:flex items-center justify-between mt-2.5 mb-5">

                        <div className='flex text-yellow-300'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>

                        <span class="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>

                    </div>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
                </div>
                <div>
                    <Link to={`/checkout/${category_id}`}>
                        <div>
                            <Button className='mx-auto' gradientDuoTone="redToYellow">
                                Get premium access
                            </Button>
                        </div>
                    </Link>
                </div>

            </Card>
        </div>

    );
};

export default CourseDetails;