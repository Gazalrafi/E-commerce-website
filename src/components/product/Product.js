import React from 'react';
import ProductCard from './ProductCard.js';

export const itemList=  [

        {
        id:'m1',
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'images/Album 1.png',

        view1:'View full image',

        album:'Album 1',

        
        },
        
        {
        id:'m2',
        
        title: 'Black and white Colors',
        
        price:50,
        
        imageUrl: 'images/Album 2.png',

        view2:'View full image',

        album:'Album 2',
        
        },
        
        {
        id:'m3',
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'images/Album 3.png',

        view3:'View full image',

        album:'Album 3',

        
        },
        
        {
        id:'m4',
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'images/Album 4.png',

        view4:'View full image',

        album:'Album 4',
        
        },
        
        ];

        

const Product=()=>{
     
   const list= itemList.map((currData)=>
       
        <ProductCard
       
        price={currData.price}
        img={currData.imageUrl}
        album={currData.album}
        view1={currData.view1}
        view2={currData.view2}
        view3={currData.view3}
        view4={currData.view4}
        key={currData.id}
        id={currData.id}

        />
       
)
        return(  <div>
                {list}
                </div>
        )
      
}
        

export default Product;