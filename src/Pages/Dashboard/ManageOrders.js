import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';
import OrderRow from './OrderRow';

const ManageProducts = () => {
    const [modal, setModal] = useState();
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://sura-tools-serverside-production.up.railway.app/order', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    
    return (
        <div className='py-6 px-2'>
            <div className='flex justify-between items-center mb-1'>
                <p className='text-xl font-bold text-primary text-left pb-2 pl-1'>Manage Orders</p>
            </div>
            <table className="table table-auto flex-wrap w-full">
                <thead>
                    <tr>
                        <th className='bg-primary'>SI No.</th>
                        <th className='bg-primary'>Name</th>
                        <th className='invisible md:visible bg-primary'>Quantity</th>
                        <th className='invisible md:visible bg-primary'>Total</th>
                        <th className='invisible md:visible bg-primary'>Payment</th>
                        <th className='invisible md:visible bg-primary'>Status</th>
                        <th className='bg-primary'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => <OrderRow index={index} key={order._id} order={order} setModal={setModal}></OrderRow>)
                    }
                    {

                        modal && <CancelOrderModal order={modal} refetch={refetch}></CancelOrderModal>

                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;