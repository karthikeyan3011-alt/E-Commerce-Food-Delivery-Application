import React,{useState} from 'react'
import Card from './Card'


const Popup = (props) => {
   console.log("popProps",props)
  // const [cartLoad,setCartLoad]=useState([])

   function cartHandler()
   {
   
    
   }
   
   //function close pop
   function popupClose()
   {
    props.setPopup(false)
   }

   let popData=props.properties.map((popupItem,index)=>
{
    return(
        <li className="popcontainer">
            <img className="popimg" src={popupItem.allpic}></img>
            <h3>{popupItem.allItem}</h3>
            <h4>{popupItem.ingradientOne}</h4>
            <h4>{popupItem.ingradientTwo}</h4>
            <h4>{popupItem.ingradientThree}</h4>
            <h3 style={{color:"white"}}>Price:{popupItem.price}</h3>
            <button className='btn1'onClick={()=>
              {
                props.cartHandler(popupItem.allpic,popupItem.allItem,popupItem.price)
              }
            }>Add to Card</button>
        </li>
    )
})
  return (
    <div className="popup">
      <button className="btnclick" onClick={popupClose}>X</button>
      <h1 className="popuph1">Popup</h1>
      {popData}

    </div>
        )
}
export default Popup
