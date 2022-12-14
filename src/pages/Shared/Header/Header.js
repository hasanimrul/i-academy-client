import { Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaUserAlt, BsMoonFill } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../routes/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handledarkMode = () => {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }

        var themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn.addEventListener('click', function () {

            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }

        });
    }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div>

            <Navbar className='bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900'
            >
                <Link to="/" className='flex flex-row'>
                    <img
                        src="https://play-lh.googleusercontent.com/z8ekF98PgJvfN_s2smqqoh4HCSb_qPyd4cDRdcawxC9WxDhSUWl_4XX8vkO2qTzw2Qny"
                        className="mr-3 h-6 sm:h-9"
                        alt="iAcademy Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        iAcademy
                    </span>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <button onClick={handledarkMode}
                        id="theme-toggle"
                        type="button"
                        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                    >
                        <div className='flex flex-row gap-2'>
                            <svg
                                id="theme-toggle-dark-icon"
                                class="w-5 h-5 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                ></path>
                            </svg>
                            <svg
                                id="theme-toggle-light-icon"
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </button>
                    <Link
                        className='text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-3'
                        to="/"
                        active={true}
                    >
                        Courses
                    </Link>

                    <Link className='text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-3'
                        to="/faq">
                        FAQ
                    </Link>
                    <Link className='text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-3'
                        to="/blog">
                        Blog
                    </Link>
                    <>
                        {
                            user?.uid ?
                                <>
                                    <Button className="me-2" onClick={handleLogOut} outline={true}
                                        gradientDuoTone="purpleToBlue">Log Out</Button>
                                </>
                                :
                                <>
                                    <Link className='text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-3'
                                        to="/login">
                                        Log in
                                    </Link>
                                </>
                        }
                    </>

                    <Link className='text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mb-3'
                        to="/profile">
                        {
                            user?.photoURL ?
                                <Tooltip content={user?.displayName}>
                                    <img className="w-9 rounded-full" src={user?.photoURL} alt="user pic" />
                                </Tooltip>
                                :
                                <Tooltip content={user?.displayName}>
                                    <FaUserAlt></FaUserAlt>
                                </Tooltip>
                        }

                    </Link>

                    <div className='md:hidden '>
                        <LeftSideNav></LeftSideNav>
                    </div>

                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default Header;