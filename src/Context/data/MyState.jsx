import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../Firebase/FirebaseConfig';
function MyState(props) {
   const [mode,setMode] = useState('dark');
   const [loading,setLoading] = useState(false);
   const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "rgb(17,24,39)"
    }else{
        setMode('light');
        document.body.style.backgroundColor ="white"
    }
   }

   const [products, setProducts] = useState({
     title: "",
     price: "",
     imageUrl: "",
     category: "",
     description: "",
     time: Timestamp.now(),
     date: new Date().toLocaleString("en-US", {
       month: "short",
       day: "2-digit",
       year: "numeric",
     }),
   });
   
   const addProduct = async () => {
     const productRef = collection(fireDB, "products");
     setLoading(true);
   
     try {
       // Add a fresh timestamp and date before saving
       const productData = {
         ...products,
         time: Timestamp.now(),
         date: new Date().toLocaleString("en-US", {
           month: "short",
           day: "2-digit",
           year: "numeric",
         }),
       };
   
       await addDoc(productRef, productData);
       toast.success("Product added successfully");
       getProduct(); 
       setTimeout(() => {
         window.location.href = "/dashboard";
       }, 800);
   
     
       setProducts({
         title: "",
         price: "",
         imageUrl: "",
         category: "",
         description: "",
         time: Timestamp.now(),
         date: new Date().toLocaleString("en-US", {
           month: "short",
           day: "2-digit",
           year: "numeric",
         }),
       });
   
       setLoading(false);
     } catch (error) {
       console.error("Error adding product: ", error);
       setLoading(false);
       toast.error("Error adding product. Please try again.");
     }
   };
   
  const edithandle = (item) => {
    setProducts(item)
  }
  const getProduct = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProduct();
      setLoading(false)
      window.location.href = '/dashboard'
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {
    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProduct()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    getProduct();
  },[])
  console.log("mystate called")
  // console.log(product)
  console.log(products)
  return (
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading,products,setProducts,addProduct,deleteProduct,updateProduct,edithandle}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState