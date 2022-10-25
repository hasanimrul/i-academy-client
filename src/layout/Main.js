import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from "react-router-dom";
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className="col-span-1"><LeftSideNav></LeftSideNav></div>
                <div className='col-span-3'><Outlet></Outlet></div>
            </div>

        </div>
    );
};

export default Main;