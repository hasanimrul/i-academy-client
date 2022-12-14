import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../pages/Blog/Blog';
import Courses from '../../pages/Cources/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivacyAndPolicy from '../../pages/Others/PrivacyAndPolicy/PrivacyAndPolicy';
import TermsAndConditions from '../../pages/Others/TermsAndConditions/TermsAndConditions';
import Profile from '../../pages/Others/Profile/Profile';
import Category from '../../pages/Category/Category';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Checkout from '../../pages/Others/Checkout/Checkout';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://i-academy-server.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://i-academy-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://i-academy-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/privacy',
                element: <PrivacyAndPolicy></PrivacyAndPolicy>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '*',
                element: <h2 className='text-5xl dark:text-white text-center'> 404 error!! This route is not found.</h2>
            }
        ]
    }
])