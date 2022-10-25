import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../pages/Blog/Blog';
import Courses from '../../pages/Cources/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: 'faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])