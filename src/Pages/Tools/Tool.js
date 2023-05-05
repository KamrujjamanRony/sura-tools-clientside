import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, image, name, description, min_quantity, available_quantity, price} = tool;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`purchase/${id}`);
    }
    return (
        <div className="card max-w-lg border mx-auto border-slate-200 rounded">
            <figure className="px-5 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{description}</p>
                <p><span className='text-2xl fond-bold text-primary'> ${price} </span></p>
                <p><span className='text-xl fond-bold text-primary'>{min_quantity} pieces</span> (Min. Order)</p>
                <p><span className='text-xl fond-bold text-primary'>{available_quantity} pieces</span> (Stock)</p>
                <div className="card-actions mx-auto">
                    <button onClick={() => navigateToServiceDetail(_id)} className="btn btn-outline btn-primary uppercase">purchase now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;