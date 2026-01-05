import React, { useEffect, useState } from 'react'
import Header from './Header'
import SpecialMeals from './SpecialMeals';
import FilteredMeals from './FilteredMeals';
import'./style.css'
import Loader from './Loader'

const Main = () => {

    //define state for loader
    const[loading,setLoading]=useState(true)

    //fetching API for showing special meals
     const [allSpecialMeals,setAllSpecialMeals]=useState([])

    //define function for fetch allspecialmeals
    const [categories, setCategoryMeals]=useState([])

    //define state for showing single meal
    const [singleMeal,setSingleMeal]=useState([])

    //define state for cartloading
    const [cartLoad,setCartLoad]=useState(false)

    const [cartItems,setCartItems]=useState([])
    

    async function fetchAllSpecialMeals()
    {
         const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        const res=await fetch(API_URL)
        const data=await res.json();
        console.log("allspecialmeals",data.meals)
        setAllSpecialMeals(data.meals)

        setLoading(false)

    }
    async function fetchAllCatogeryMeals()
    {
      const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php";
      const res=await fetch(API_URL)
      const data=await res.json()
      console.log("data in category",data.categories)
      setCategoryMeals(data.categories)

    }

    //function to fetch singledish

    async function fetchSingleDish()
    {
      const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
      const res=await fetch(API_URL)
      const data=await res.json()
      console.log("data single dish",data)
      setSingleMeal(data.meals)
    }


    useEffect(()=>
    {
        fetchAllSpecialMeals()  
        fetchAllCatogeryMeals()
        fetchSingleDish()
    },[])
  return (
    <div>
      {/* <h1>Main</h1> */}
      <Header></Header>
      {/* <SpecialMeals
      allSpecialMeals={allSpecialMeals}
      /> */}

      {
        !loading?
        <SpecialMeals
         allSpecialMeals={allSpecialMeals}
         cartLoad={cartLoad}
         setCartLoad={setCartLoad}
         cartItems={cartItems}
         setCartItems={setCartItems}
        />:
        <Loader/>
      }

      {!loading? 
      <FilteredMeals
      categories={categories} 
      allSpecialMeals={allSpecialMeals}
      singleMeal={singleMeal}
      setSingleMeal={setSingleMeal}

         cartLoad={cartLoad}
         setCartLoad={setCartLoad}
         cartItems={cartItems}
         setCartItems={setCartItems}
   
     
      />:
      <Loader/>}
    </div>
  )
}
export default Main


