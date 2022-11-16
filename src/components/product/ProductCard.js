import React from 'react';
import classes from './ProductCard.module.css';


const ProductCard=(props)=>{
return (
<>
<section className={classes.all}>
    {props.data.map((currData)=>{
return(
 
<>
<div className={classes.body}>
<div key={currData.id}>
<div className={classes.music}>
    <h2>MUSIC</h2>
</div>
<div className={classes.album}>
    <h4>{currData.album}</h4>
</div>
<div>
<img src={currData.imageUrl} alt='images'/>
</div>
<span className={classes.price}>{currData.price}</span>
<button className={classes.button}>Order</button>
</div>
</div>


</>
)
})}
</section>
</>

)
}
export default ProductCard;