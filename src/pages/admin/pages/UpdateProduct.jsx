import AddAndUpdateform from "../../../components/forms/AddAndUpdateform";
import React, { useContext } from 'react'
import MyContext from "../../../Context/data/MyContext";

function UpdateProduct() {
  const context = useContext(MyContext)
  const {updateProduct} = context
  return (
    <><AddAndUpdateform
     type="Update the Product" 
     functiontype = {updateProduct}
    /></>
  )
}

export default UpdateProduct