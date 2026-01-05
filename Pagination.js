import React, { useState } from 'react'

const Pagination = (props) => {

console.log("props in pagination",props)

//define state for active number
const [activePage,setActivePage]=useState(1)

let pageNumbers=[];
for(let i=1;i<=Math.ceil(props.filteredMeal.length/props.itemsPerPage);i++)
 
{
    pageNumbers.push(i)
} 
console.log("pages",pageNumbers)

// define function to take current page

function getCurrentPage(clickedPage)
{
  // alert(clickedPage)
  props.setCurrentPage(clickedPage)
  setActivePage(clickedPage)
}



let pages=pageNumbers.map((pageNumber,index)=>
{
    return(
     
      <button className={`${activePage==pageNumber?"activePage":""}`} onClick={()=>{getCurrentPage(pageNumber)}}>{pageNumber}</button>       
    )
})

  return (
    <div className='pagination'>    
      {pages}    
    </div>
  )
}

export default Pagination