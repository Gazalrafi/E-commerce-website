import classes from './ProductImage.module.css';
import React,{useState} from 'react';
import NavBar from '../Nav/Nav.js';



const img=[{
    id:1,
    imageUrl:'images/Album 1.png',
   
},
{   id:2,
    imageUrl:'images/Album 1.png',
   
},
{   id:3,
    imageUrl:'images/Album 1.png',
   
},

];
const ProductImageA=()=>{
const [mainImage,setMainImage]=useState(img[0]);
return (
    <>
    <div>
    <NavBar/>
    <div className={classes.headline}>
    <h1>A beautiful Album</h1>
    </div>
    <div className={classes.column}>
    {
     img.map((currImage)=>{
        return (
         <figure>
            <img 
            src={currImage.imageUrl} 
            alt='images'
            className={classes.boximage}
            key={currImage.id}
            onClick={()=>setMainImage(currImage)}
            />
         </figure>
        )
    })
}            

<div className={classes.mainscreenout}>
    <img 
    src={mainImage.imageUrl} 
    alt='images'
    className={classes.mainscreen}
    key={mainImage.id}
    />
   
</div>
    </div>
   <button className={classes.button}>Add to Cart</button>
    </div>
    </>
)
}
export default ProductImageA;
