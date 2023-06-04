import React, {  useEffect, useState } from "react";

export const Context = React.createContext();


export function Provider (props) {

    const [categData, setcategData] = useState([])
    const [productData, setProductData] = useState([])
    
    const fetchProducts = ()=>{
        fetch('http://localhost:5000/api/products')
        .then(res=>res.json())
        .then(data=>setProductData(data))
    }

        const fetchCateg = ()=>{ fetch('http://localhost:5000/api/category')
        .then(res=>res.json())
        .then(data=>{
            setcategData(data)
        })
    }

    useEffect(()=>{
        fetchProducts();
        fetchCateg();

    },[])

    const value = {
        categData,
        productData,

        actions:{
            fetchProducts
        }
    }
        return(
            <Context.Provider value={value}>
                {props.children}
            </Context.Provider>
        );

}