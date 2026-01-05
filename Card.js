import React,{use, useState} from 'react'
import Cheakout from './Cheakout'

const Card = (props) => {
  //define for state totalprice
  const[itemTotalPrice,setItemTotalPrice]=useState([])


  //define state checkout page:
  const[loadCheckOut,setLoadCheckOut]=useState(false)

  //define state for  checkout data
  const[checkOutItems,setCheckOutItems]=useState([])

  console.log("props incart",props.cartItems)



  console.log("cartitems values",props)

  
  

//define function for increase
console.log("cart props",props)

   function  incrementQuantity(clickedIndex)
   {
    
    let quantityChanged=props.cartItems.map((item,index)=>
    
      index==clickedIndex?{...item,quantity:item.quantity+1}:item
        )
    console.log("quantityChanged",quantityChanged)
   
    
     props.setCartItems(quantityChanged)
   }

   //define function for decrement:

   function decrementQuantity(clickedIndex)
   {
     let quantityChanged=props.cartItems.map((item,index)=>
    
      index==clickedIndex?{...item,quantity:item.quantity-1}:item
        )
    console.log("quantityChanged",quantityChanged)
   
     
     props.setCartItems(quantityChanged)
   }

   //define function for delete

   function deleteCart(clickedItems)
   {
    if(window.confirm("do you want to delete")){

        props.setCartItems(props.cartItems.filter((item,index)=>index!=clickedItems))
    }
    props.setCartItems(props.cartItems.filter((item,index)=>index!=clickedItems))

   }


   //function to load cheakout page
   function checkOutHandler()
   {
    
    setLoadCheckOut(true)
   }

   //define function for buy now items
   function buyNowHandler(item,quantity,price)
   {
    if(window.confirm("do you want to buy"))
    {
      let totalPriceForItem=price*quantity
      setItemTotalPrice([...itemTotalPrice,totalPriceForItem])
    

    setCheckOutItems([...checkOutItems,{
      item:item,
      quantity:quantity,
      price:price,
      
    }])
  }
  else{
    return
  }
   }

let cartData=props.cartItems.map((cartItems,index)=>
{
 return(
  <div className="cartcontainer">
    <li className="none">  
    <img className="cartimg" src={cartItems.img}></img>
    <h4 className='name'>{cartItems.name}</h4>
    <h3 className="price">Price:{cartItems.quantity*cartItems.price}</h3>
    <h4 className='quantity'>Quantity:{cartItems.quantity}</h4>

    <button className="plus" onClick={()=>
      {
        incrementQuantity(index)
      }

    }>+</button>

    <button className="minus" onClick={()=>
      {
        decrementQuantity(index)
      }

    }>-</button>
    <i  onClick={()=>
      {
        deleteCart(index)
      }
    } class="fa-solid fa-trash"></i>
    <br></br>
    <button className="buynow" onClick={()=>
      {
        buyNowHandler(cartItems.name,cartItems.quantity,cartItems.price,)
      }
    }>BuyNow</button></li>
  </div>
 )
})
function btnCloseCart(){

  props.setCartLoad(false)
}

  return (
  
<div>
      {cartData.length!=0?
          <div className="cart">
      
      <button className="btncard" onClick={btnCloseCart}>X</button>
      
      <h1 className="carth1" style={{color:"white"}}>Cart</h1>
      {cartData}
      <button className="checkbox" onClick={checkOutHandler}>Checkout</button>
          </div>
          
        :<div className="emptycard">
          {/* <button onClick={closeCart1}>X</button> */}
          <h4 style={{color:"white"}}>Cart is Empty</h4>
        </div>
        
        }
      {loadCheckOut?<Cheakout
      checkOutItems={checkOutItems}
      itemTotalPrice={itemTotalPrice}
      setLoadCheckOut={setLoadCheckOut}
      setCartLoad={props.setCartLoad}
     
      />:""}
    </div>
  )
}
export default Card


