import React from 'react';
// import PropTypes from 'prop-types'

function Paintings ({
    imgUrl, 
    title, 
    author,
    url,
    price,
    quantity,
 })
 {
   return (
   <div>
      <img scr={imgUrl} alt ={title} width="480"/>
      <h2>{title}</h2>
      <p> Author:<a href={url}>{author}</a>
      </p>
      <p>Price:{price} credits</p>
      <p>Avalability:{quantity} almost no or on stock</p>
      <button type="button">Add to my</button>
    </div>
   );
}

    export default  Paintings