import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from "react-router-dom";
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4 mb-20'>
                <div className="col-span-1 hidden md:block"><LeftSideNav></LeftSideNav></div>
                <div className='col-span-3 border-l pl-5'><Outlet></Outlet></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;