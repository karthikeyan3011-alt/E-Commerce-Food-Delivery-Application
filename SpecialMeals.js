import React,{useState} from 'react'
import Popup from './Popup'
import Card from './Card'

const SpecialMeals = (props) => {
    // console.log("props in allSpecialMeals",props.allSpecialMeals)

    //define state for popup
    const [popup,setPopup]=useState(false)
    
    //define state show popupData
    const[properties,setProperties]=useState([])

    // function to show popup
    function popupHandler(properties)
    {
      console.log("props",properties)
      setPopup(true)
      setProperties(properties)
    }

    // function to define cart data
    function cartHandler(img,name,price)
    {
      props.setCartLoad(true)
      setPopup(false)
      props.setCartItems([...props.cartItems,
        {
          img:img,
          name:name,
          price:price,
          quantity:1
        }]
      )
    }
    console.log("cart in special meal",props.cartItems)


  const priceList={
  "Cabbage Soup (Shchi)":220,
  "Cacik":180,
  "Cajun spiced fish tacos":240,
  "Callaloo Jamaican Style":260,
  "Canadian Butter Tarts":180,
  "Carbonada Criolla":150,
  "Caribbean Tamarind balls":230,
  "Caribbean Tamarind balls":170

}

const specialMealWithPrice= props.allSpecialMeals.map((meal,index) => {
  return{
  ...meal,
  price: priceList[meal.strMeal] || 200, //  price if not found
}
});

//showing webpage
    let specialMeals=specialMealWithPrice.map((item,index)=>
    {
        if(index<=7)
        return(
      <ul>
        <li onClick={()=>{popupHandler([{
          allItem:item.strMeal,
          allpic:item.strMealThumb,
          ingradientOne:item.strIngredient1,
          ingradientTwo:item.strIngredient6,
          ingradientThree:item.strIngredient10,
          price:item.price,

        }])}}>
                <img src={item.strMealThumb}></img>
                <h3>{item.strMeal}</h3>
            </li>
      </ul>
            
        )
    })
  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>SpecialMeals</h1>
      <ul class="specialmeal">
        {specialMeals}
        
      </ul>
      {popup?<Popup
      properties={properties}
      setPopup={setPopup}
      cartHandler={cartHandler}
      />:""}

      
      {props.cartLoad?<Card
      cartItems={props.cartItems}
      setCartItems={props.setCartItems}
      setCartLoad={props.setCartLoad}
      setPopup={setPopup}
      />:""}
    </div>
  ) 
}
export default SpecialMeals



