import React from 'react';
import Ozar1 from "../../assets/images/bg/Ozar1.png";

const Global = () => {
    return (
        <div className='bg-base-200'>
           <div className='container mx-auto text-center pt-12 pb-24'>
                <h2 className='text-2xl font-bold'>Our Global Customer Base</h2>
                <img src={Ozar1} className="mx-auto my-4" alt="" />
                <img src="https://www.aloktools.com/wp-content/uploads/2021/11/world-map.jpg" className="mx-auto" alt="" />
            </div> 
        </div>
    );
};

export default Global;