import React, { useState } from 'react'
import Pagination from './Pagination'
import Popup from './Popup'
import Card from './Card'
import { priceList } from './PriceList'

const FilteredMeals = (props) => {
  console.log("props i filter", props)

  //define single filter meal click btn
  const [filteredMeal, setsetFilteredMeals] = useState([])

  //define state for active category
  const [activeCategory, setActiveCategory] = useState("Beef")

  //Pagination
  //defint state for items perpage
  const [itemsPerPage, setItemsPerPage] = useState(4)

  //define state for currentpage
  const [currentPage, setCurrentPage] = useState(3)

  let endIndex = itemsPerPage * currentPage;//4

  let startIndex = endIndex - itemsPerPage;//0

  let mealsPerPage = filteredMeal.slice(startIndex, endIndex);

  console.log("mealsPerPage", mealsPerPage)

  // console.log("start",startIndex)
  // console.log("endIndex",endIndex) 

  //popup 
  const [popup, setPopup] = useState(false)

  //define state show popupData
  const [properties, setProperties] = useState([])


  function popupHandler(properties) {
    setPopup(true)
    setProperties(properties)
  }

  // function to define cart data
  function cartHandler(img, name, price) {
    props.setCartLoad(true)
    alert(name)
    props.setCartItems(...props.cartItems,
      [{
        img: img,
        name: name,
        price: price,
        quantity: 1
      }]
    )
  }
  console.log("cart in special meal", props.cartItems)




  // adding price

  const specialMealWithPrice = props.allSpecialMeals.map((meal) => {
    return {
      ...meal,
      price: priceList[meal.strMeal] || 200, //  price if not found
    }
  });



  function filterdCategoryHandler(userClickedCategory) {
    alert(userClickedCategory)

    props.setSingleMeal([])

    setActiveCategory(userClickedCategory)

    let filteredItems = specialMealWithPrice.filter((mainItem, index) => {

      return userClickedCategory == mainItem.strCategory
    }).map((mealItem, index) => {
      if (index <= 7)
        return (

          <li onClick={() => {
            popupHandler([{
              allItem: mealItem.strMeal,
              allpic: mealItem.strMealThumb,
              ingradientOne: mealItem.strIngredient1,
              ingradientTwo: mealItem.strIngredient6,
              ingradientThree: mealItem.strIngredient10,
              price: mealItem.price,

            }])
          }}>

            <img src={mealItem.strMealThumb}></img>
            <h4 style={{ textAlign: "center" }}>{mealItem.strMeal}</h4>
          </li>
        )
    })
    console.log("filter.......", filteredItems)

    setsetFilteredMeals(filteredItems)
  }



  let categoryMeals = props.categories.map((categoryItem, index) => {
    return (
      <li key={index} className={`list${activeCategory == categoryItem.strCategory ? "active" : ""}`} onClick={() => {
        filterdCategoryHandler(categoryItem.strCategory)
      }

      }>{categoryItem.strCategory}</li>
    )
  })

  //show single meal:

  let singleMeals = props.singleMeal.map((singleItem, index) => {
    if (index <= 7)
      return (
        <li>
          <img src={singleItem.strMealThumb}></img>
          <h4>{singleItem.strMeal}</h4>
        </li>
      )
  })

  return (
    <div className="filtered">
      <h1 style={{ color: "red", textAlign: "center" }}>Choose Your Meals</h1>
      <ul>
        {categoryMeals}
      </ul>


      <div className="filteredmeal">
        <ul className="filterul">
          {singleMeals}
          {singleMeals.length != 0 || filteredMeal.length != 0 ? mealsPerPage :
            <div className="alert">
              <h1 style={{ color: "red" }}>Sorry No Item Found</h1>
              <h2>Try Anothor Time</h2></div>}

        </ul>

      </div>


      <Pagination
        filteredMeal={filteredMeal}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}

      />
      {popup ? <Popup
        setPopup={setPopup}
        properties={properties}
        cartHandler={cartHandler}

      /> : ""}

      {/* {props.cartLoad?<Card
      cartItems={props.cartItems}
      setPopup={setPopup}

      
      />:""} */}
    </div>

  )
}
export default FilteredMeals

