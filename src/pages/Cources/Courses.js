import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-3xl font-bold mb-10 mt-5 dark:text-white'>Featured Courses</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    courses.map(course => <CourseCart
                        key={course._id}
                        course={course}
                    ></CourseCart>)
                }
            </div>
        </div>
    );
};

export default Courses;