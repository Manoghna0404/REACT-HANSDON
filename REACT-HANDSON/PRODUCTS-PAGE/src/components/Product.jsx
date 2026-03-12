import React from 'react'
function Product(props){
    let {name,price,brand,description,image}=props.product;
    console.log(props)
    
    return(
        <div className='bg-blue-100 m-6 sm:m-6 md:m-7 rounded-2xl p-3 w-full sm:w-72 md:w-80 inline-block shadow-2xl text-center '>
            <span className='font-bold'>Name:</span><span>{name}</span><br/>
            <span className='font-bold'>Price:</span><span>{price}</span><br/>
            <span className='font-bold'>Brand:</span><span>{brand}</span><br/>
            <span className='font-bold'>Description:</span><span>{description}</span><br/>
            <img src={image} alt={name} className='mt-3 w-full h-40 object-contain'/>
        </div>
    )
}
export default Product;