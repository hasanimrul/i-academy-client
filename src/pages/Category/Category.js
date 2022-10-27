import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(course => <CourseDetails 
                    key={course._id}
                    course = {course}
                    ></CourseDetails>)
            }
        </div>
    );
};

export default Category;