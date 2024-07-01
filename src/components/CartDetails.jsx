import React from 'react'
import './cartstyle.css'
import { useSelector ,useDispatch } from 'react-redux'
import { Decrement, Increment, RemoveItem } from '../Redux/features/CartSlices'
function CartDetails() {
    const dispatch = useDispatch()
    const {cart} = useSelector((state) =>state.allCart)
    // console.log("cartdata" ,cart_data)
    console.log("data" ,cart)
    const handleIncrement  =(e) =>{

dispatch(Increment(e))
    }
    const handleDecrement  =(e) =>{

dispatch(Decrement(e))
    }




    const RemoveItem_Data = (e) =>{
dispatch(RemoveItem(e))
    }


    const Total = cart.reduce((a,b) =>a+(b.price)*(b.qnty),0)
  return (
    <>
     <div className='row justify-content-center m-0'>


<div className='col-md-8 mt-5 mb-5 cardsdetails'>


<div className="card">

<div className="card-header bg-dark p-3" >

  <div  className='card-header-flex'>  
  <h5 className='text-white m-0'>Cart Calculator 1</h5>
    {

cart.length>0 ? <button className='btn btn-danger mt-0 btn-sm'><i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span></button>:""


    }</div>
</div>


<div className="card-body p-0">


{cart.length===0 ? <table className='table cart-table mb-0'>
                                        <tbody>
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className='cart-empty'>
                                                        <i className='fa fa-shopping-cart'></i>
                                                        <p>Your Cart Is Empty</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>:
                                    <table className='table cart-table mb-0 table-responsive-sm'>

                                    <thead>
                                            <tr>
       <th>Action</th>
     <th>Product</th>
     <th>Name</th>
     <th>Price</th>
     <th>Qty</th>
     <th className='text-right'> <span id="amount" className='amount'>Total Amount</span></th>
           </tr>
      </thead>
     <tbody>
{



cart.map((item) =>{

    return (


<>



    <tr>
    <td>
    <button className='prdct-delete' onClick={() =>RemoveItem_Data(item)}
      ><i className='fa fa-trash-alt'></i></button>
    </td>
    <td><div className='product-img'><img src={item.imgdata

} alt="" /></div></td>
    <td><div className='product-img'><p>{item.dish}</p></div></td>
    <td>{item.price}</td>

<td>


  <div className="prdct-qty-container">
 <button className='prdct-qty-btn' type='button' 
  >
 <i className='fa fa-minus' onClick={() =>handleDecrement(item)}></i>
</button> <input type="text" className='qty-input-box'  disabled name="" id=""  value={item.qnty}/>
<button className='prdct-qty-btn' type='button' onClick={() =>handleIncrement(item)} >
<i className='fa fa-plus'></i>
    </button>
    </div>




</td>

<td className='text-right'>₹{item.price*item.qnty}</td>

    </tr>
</>
    )
})




}
 </tbody>


<tfoot>

<tr>
  <th>&nbsp;</th>
    <th colSpan={3}>&nbsp;</th>
        <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{cart.length}</span></th>
            <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ {Total}</span></th>
</tr>


</tfoot>


</table>



}


</div>




</div>



</div>



     </div> 
    </>
  )
}

export default CartDetails
