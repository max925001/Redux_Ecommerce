import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function Header() {

  const {cart} = useSelector((state) =>state.allCart)
  console.log("cart" ,cart)
  return (
    <>
          <Navbar  style={{ height: "60px", background: "black", color: "white" }}>
        <Container>
       <NavLink to="/"><h3 className='text-light'> Ecommerce</h3></NavLink>

       <NavLink to="/cart" className="text-decoration-none text-light mx-2">

       <div id='ex4'>
       <span className='p1 fa-stack fa-2x has-badge' data-count={cart.length}> <FaCartShopping/> </span>
        </div>
       </NavLink>
        </Container>
       
       
      </Navbar>
    </>
  )
}

export default Header
