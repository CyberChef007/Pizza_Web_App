import React from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {FaMinusCircle,FaPlusCircle,FaTrash} from 'react-icons/fa'
import { addToCart,deleteFromCart } from '../actions/cartAction'
import Checkout from '../components/Checkout'
const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch()
    const subTotal = cartItems.reduce((x,item) => x + item.price,0)
    return (
        <>
          <Container>
            <Row>
                <Col md={6}>
                    <h1>Card Items</h1>
                    <Row>
                        {
                            cartItems.map(items => (
                                <>
                                <Col md={7}>
                                    <h5>{items.name} [{items.varient}]</h5>
                                    <h6>{" "}Price : {items.quantity} x {items.prices[0][items.varient]} = {" "} {items.price} </h6>
                                    <h6>Quantity : &nbsp; 
                                    <FaMinusCircle className="text-danger"
                                    style={{cursor:"pointer"}}
                                    onClick={() => {dispatch(addToCart(items,items.quantity - 1,items.varient));}}/> &nbsp; 
                                    {items.quantity} &nbsp; 
                                    <FaPlusCircle className="text-success"
                                    style={{cursor:"pointer"}}
                                    onClick={() => {dispatch(addToCart(items,items.quantity + 1,items.varient));}}/></h6>
                                </Col>
                                <Col md={5}>
                                    <img alt={items.name} src={items.image} style={{width:'80px',height:'80px'}}/>
                                    <FaTrash className="text-danger"
                                    style={{cursor:"pointer" ,marginLeft: "20px"}}
                                    onClick={() => {dispatch(deleteFromCart(items));}}/>
                                </Col>
                                <hr/>
                                </>
                            ))
                        }
                    </Row>
                </Col>
                <Col md={4}>
                    <h1>Payment Info</h1>
                    <h4>Sub total</h4>
                    <h4>Rs : {subTotal} /-</h4>
                    <Checkout subTotal={subTotal}/>
                </Col>
            </Row>  
          </Container> 
        </>
    )
}

export default CartScreen
