import React from 'react';
import {Routes,Route} from "react-router";
import Random from '../components/Random/Random';
import Subscribe from '../components/Subscribe/Subscribe';
import Trend from '../components/Trend/Trend';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Random/>}/>
                <Route path='/trend' element={<Trend/>}/>
                <Route path='/subscribe' element={<Subscribe/>}/>
            </Routes>
        </div>
    );
};

export default Router;