import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch,useSelector} from 'react-redux'
import {placeOrder} from '../actions/orderAction'
import Error from './Error'
import Success from './Success'
import Loader from './Loader'
const Checkout = ({subTotal}) => {
    const orderState = useSelector((state) => state.placeOrderReducer)
    const {loading,error,success} = orderState
    const dispatch = useDispatch()
    const tokenHandler = (token) => {
        dispatch(placeOrder(token,subTotal))
        console.log(token);
    }
    return(
        <>
    {loading && (<Loader />)}
    {success && <Success success="Order Placed Successfully" />}
    {error && <Error error="Something Went Wrong"/>}
    
    
        <StripeCheckout 
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51JyW4qSAaBhJa3S6q5YirsEq6woDUO91gbfy0QjVxvfu41kkE0811e9gjrQh5mpwc72YhTdNbYAEhwauXP0r8X7c00PpuQSImv"
        currency="INR"
        >
            <Button>Pay Now</Button>
        </StripeCheckout> 
        </>)
}

export default Checkout
