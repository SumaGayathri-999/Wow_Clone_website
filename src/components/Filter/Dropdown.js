import React from 'react'
function Dropdown({filter_type,filter_options,filterItems}) {
    
  return (
    <>
     <li className="filter_type" ><label htmlFor={filter_type} style={{cursor:"pointer"}}>{filter_type}</label>
          <input type="checkbox" id={filter_type} />
          <label htmlFor={filter_type} style={{cursor:"pointer"}}>
            <svg
              className="down_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
           <ul className="filter_options">
           {filter_options.map((item)=>{
            return (
              <>
                 {filter_type === "Category" && <li key={item.category_id} ><input type="radio" name="filter" className="mr-2" onClick={(event)=>{filterItems(event,item.category_id)}}/>{item.category_name}</li>}
                 {filter_type === "Concern" && <li key={item.concern_id}><input type="radio"  name="filter"  className="mr-2" onClick={(event)=>{filterItems(event,item.concern_id)}}/>{item.concern_type}</li>}
                 {filter_type === "Ingredient" && <li key={item.ingredient_id}><input type="radio" name="filter" className="mr-2" onClick={(event)=>{filterItems(event,item.ingredient_id)}}/>{item.ingredient_name}</li>}
                 {filter_type === "Product_Type" && <li key={item.product_type_id}><input type="radio" name="filter" className="mr-2" onClick={(event)=>{filterItems(event,item.product_type_id)}}/>{item.product_type}</li>}
              </>
            )
           })}
           </ul>
         </li>
    </>
  )
}

export default Dropdown;
