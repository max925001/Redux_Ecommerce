

import {createSlice} from "@reduxjs/toolkit"

const initialState ={


cart:[]


}

const CartSlice = createSlice({


name:"cartSlice",
initialState,
reducers:{
addToCart: (state ,action) =>{


// console.log("action" ,action)
// state.cart.push(action.payload)
const ItemIndex = state.cart.findIndex((item) =>item.id===action.payload.id)
console.log("ItemIndex" ,ItemIndex)
if(ItemIndex>=0){

state.cart[ItemIndex].qnty +=1
}else{
    const temp = {...action.payload,qnty:1}
state.cart =[...state.cart ,temp]}
},


Increment: (state,action) =>{

    const ItemIndex = state.cart.findIndex((item) =>item.id===action.payload.id)
    if(ItemIndex>=0){

        state.cart[ItemIndex].qnty +=1
        }

},
Decrement: (state,action) =>{

    const ItemIndex = state.cart.findIndex((item) =>item.id===action.payload.id)
    if(ItemIndex>=0){

        state.cart[ItemIndex].qnty -=1
        }

},
RemoveItem: (state ,action) =>{

state.cart = state.cart.filter((item) =>item.id !==action.payload.id)

}



}



})



export const {addToCart ,Increment,Decrement ,RemoveItem} = CartSlice.actions
export default CartSlice.reducer