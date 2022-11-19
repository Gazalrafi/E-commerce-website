import React from 'react';
import ProductCard from './ProductCard.js';


const itemList=
     [

        {
        id:'m1',
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'images/Album 1.png',

        album:'Album 1',

        quantity:2,
        
        },
        
        {
        id:'m2',
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'images/Album 2.png',

        album:'Album 2',

        quantity:2,
        
        },
        
        {
        id:'m3',
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'images/Album 3.png',

        album:'Album 3',

        quantity:3,
        
        },
        
        {
        id:'m4',
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'images/Album 4.png',

        quantity:1,

        album:'Album 4',
        
        },
        
        ];

const Product=()=>{
      
   const list= itemList.map((currData)=>
        <ProductCard
        id={currData.id}
        key={currData.id}
        price={currData.price}
        image={currData.imageUrl}
        album={currData.album}/>
)
        return(  <div>
                {list}
                </div>
        )
        
}
        

export default Product;