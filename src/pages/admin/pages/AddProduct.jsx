import AddAndUpdateform from "../../../components/forms/AddAndUpdateform";
import React, { useContext } from 'react'
import MyContext from "../../../Context/data/MyContext";

function AddProduct() {
  const context = useContext(MyContext)
  const {addProduct} = context
  return (
   <><AddAndUpdateform type="Add Product" 
   functiontype={addProduct}  /></>
  )
}

export default AddProduct