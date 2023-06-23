import React, { useEffect, useState } from 'react'
import { getUserOrders } from '../actions/orderAction'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Error from '../components/Error'
const OrderScreen = () => {
    const orderState = useSelector(state => state.getUserOrdersReducer)
    const { loading, error, orders } = orderState
    console.log("orders", orders)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch]);
    return (
        <>
            <h1>Orders</h1>
            {loading && (<Loader />)}
            {error && (<Error error="Something Went Wrong" />)}
            <div className=''>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Amount</th>
                            <th scope="col">city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.map((order, idx) => {
                            return (
                                <tr>
                                    <th scope="row">{order.name}</th>
                                    <td>{order.email}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.shippingAddress.city}</td>
                                    <td>{order.orderItems.map((item) => {
                                            <div>
                                                <h6>{item.name} [{item.varient}] * {item.quantity} = {" "} {item.price}</h6>
                                            </div>
                                        })}</td>
                                </tr>
                                // <Row key={idx}>
                                //     <Col md={4}>
                                //         {order.orderItems.map((item) => {
                                //             <div>
                                //                 <h6 key={item.name}>{item.name} [{item.varient}] * {item.quantity} = {" "} {item.price}</h6>
                                //             </div>
                                //         })}
                                //     </Col>
                                //     <Col md={4}>
                                //     </Col>
                                //     <Col md={4}></Col>
                                // </Row>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default OrderScreen


