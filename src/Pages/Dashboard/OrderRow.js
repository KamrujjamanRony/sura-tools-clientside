import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useDbUser from '../../hooks/useDbUser';
import Loading from '../Shared/Loading';

const OrderRow = ({ index, order, setModal, refetch }) => {

    const [authUser] = useAuthState(auth);
    const [dbUser, dbLoading] = useDbUser(authUser.email);

    const { _id, name, quantity, price, payment, shipment } = order;

    const handleDelivered = (id) => {

        const updatedOrder = {
            shipping: 'Shipped'
        }
        fetch(`https://sura-tools-serverside.vercel.app/update-shipping/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedOrder)
        }).then(res => res.json()).then(data => {
            console.log(data);
            refetch();
        })

    }

    if (dbLoading) {
        return <Loading />
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td className='invisible md:visible'>{quantity}</td>
            <td className='invisible md:visible'>{price}</td>
            <td className='invisible md:visible'>{payment ? 'Paid' : <span className='text-red-500'>Pending</span>}</td>
            <td className='invisible md:visible'>{shipment || <span className='text-red-500'>Pending</span>}</td>
            <td className='flex gap-x-3'>
                {
                    (!dbUser.role && !payment) && <Link to={`/dashboard/payment/${_id}`} className='btn btn-xs bg-teal-400 hover:bg-teal-600 border-0'>Pay</Link>
                }
                {
                    !payment && <label onClick={() => setModal(order)} htmlFor="delete-modal" className="btn btn-xs bg-red-400 hover:bg-red-600 border-0 modal-button">Cancel</label>
                }
                {
                    (dbUser.role && payment && !shipment) && <button onClick={() => handleDelivered(_id)} className='btn btn-xs bg-teal-400 hover:bg-teal-600 border-0'>Delivered</button>
                }
            </td>
        </tr>
    );
};

export default OrderRow;