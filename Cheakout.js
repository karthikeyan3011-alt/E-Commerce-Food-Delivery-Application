import React from 'react'

const Cheakout = (props) => {
    console.log("props in checkout",props)

    //function to close checkout

    function btnClose()
    {
      props.setLoadCheckOut(false)
      props.setCartLoad(false)

    }

    let totalPrice=props.itemTotalPrice.reduce((acc,item)=>acc+item,0)
    console.log("totalPrice",totalPrice)
  return (
    <div className="cheakout">
      <h1>Checkout</h1>
      <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price/item</th>
                <th>TotalPrice</th>
            </tr>
        </thead>
        <tbody>
            {props.checkOutItems.map((item,index)=>
            {
                return(
                    <tr>
                        <td>{item.item}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity*item.price}</td>  
                    </tr>
                )
            })}

            <tr>
              <td colSpan={3}>TotalAmount</td>
              <td>{totalPrice}</td>
            </tr>
        </tbody>
      </table>
      <button className="close" onClick={btnClose}>Close</button>
    </div>
  )
}
export default Cheakout
