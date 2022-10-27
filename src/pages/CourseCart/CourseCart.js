import { Card } from 'flowbite-react';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCart = ({ course }) => {
    const { name, picture, category_id } = course;
    return (

        <div class="max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class=" h-72 w-full" src={picture} alt="" />
            <div class="p-5 text-center">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                
                <Link to={`/category/${category_id}`} class="inline-flex items-center py-2 px-3 text-sm gap-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    See Details <br />
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    
                </Link>
            </div>
        </div>

    );
};

export default CourseCart;