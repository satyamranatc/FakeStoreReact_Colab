import React from 'react'
import loader from "../assets/loader.gif";
import { useState,useEffect } from 'react'
export default function Product() {

  let[product,setProduct]=useState([]);
   let[loading,setLoading]=useState(true)
  async function getProductData(){
    try{
      let data = await fetch(`https://api.escuelajs.co/api/v1/products`)
      let res = await data.json()
      setProduct(res)
    }
    catch(error){
      console.log(error.message)
    }
    finally{
        setLoading(false); 
     console.log("API call completed");
    }
  }
  useEffect(()=>{
    getProductData()
  },[])
   if (loading) {
    return (
      <div>
        <img src={loader} alt="" />
          <p>Loading products...</p>
      </div>
    )
    
  }
  return (
  <div>
  <div>
    {product.map((e) => (
      <div key={e.id}>
        
        <img src={e.images[0] || "https://picsum.photos/300/200"}alt={e.title} onError={(ev) => (ev.target.src = "https://picsum.photos/300/200")}/>
        <h2>{e.title}</h2>
        <p>Price: ₹{e.price}</p>
        <p><b>Category:</b> {e.category.name}</p>
        <p>{e.description}</p>
        <p> {e.id}</p>
        <p><b>Slug:</b> {e.slug}</p>
     </div>
    ))}
  </div>
</div>
  )
}