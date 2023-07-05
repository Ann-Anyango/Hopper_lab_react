import React , {useEffect,useState} from "react";
const Products=()=>{
    const [products, setProducts]=useState([]);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProduct();
        })()

    },[])
    console.log({products})
    const getProduct=async()=>{
        try{
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json();
            setProducts(result.products);
            setLoading(false)
        }
        catch (error){
            console.log(error.message)
        }
    }
    if (loading){
        return <h2>Loading .....</h2>
    }


    return(
        <div>
            <h2>List of Products</h2>
            {products.map(item=>(
                <div key ={item.id}>
                    <h3>{item.title}</h3>
                    </div>
            ))}
        </div>
    )
}
export default Products