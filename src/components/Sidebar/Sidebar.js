import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"
import {FcGoogle} from "react-icons/fc"

const Sidebar = () => {
    return (
        <div className="p-2 space-y-5">
            <Link to="/" className="flex items-center space-x-3 hover:bg-gray-100 py-1 px-2">
                <AiOutlineHome/>
                <span>Home</span>
            </Link>
            <Link to="/trend" className="flex items-center space-x-3 hover:bg-gray-100 py-1 px-2">
                <MdOutlineExplore/>
                <span>Explore</span>
            </Link>
            <Link to="/subscribe" className="flex items-center space-x-3 hover:bg-gray-100 py-1 px-2">
                <MdOutlineSubscriptions/>
                <span>Subcription</span>
            </Link>
            <Link to="/myvideo" className="flex items-center space-x-3 hover:bg-gray-100 py-1 px-2">
                <MdOutlineVideoLibrary/>
                <span>Your videos</span>
            </Link>
            <div>
                <FcGoogle/>
            </div>
        </div>
    );
};

export default Sidebar;