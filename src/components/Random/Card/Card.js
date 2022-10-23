import React from 'react';
// import demoProfile from '../../';
// import demobg from ''

const Card = ({video}) => {
    const {title,views,imageUrl} = video
    console.log(title)
    return (
        <div className='card border p-1 rounded'>
            <div classname="img">
                <img src={imageUrl} alt="" className='h-36'/>
            </div>
            <div classname="details">
                <div>
                    
                </div>
                <div>
                    <p className='text-sm'>{title}</p>
                    <p className='text-xs'>
                        <span>{views}</span>
                        <span>18 hours ago</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;