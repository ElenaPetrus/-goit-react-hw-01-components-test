import React from 'react';

import Paintings from './Paintings';
import PropTypes from 'prop-types';

function PaintingList ({paintings}){
    return (
        <ul>
            {paintings.map(painting =>(
            <li key={painting.id}>
                <Paintings
                imgUrl={painting.url}
                title ={painting.title}
                author={painting.author.tag} 
                url={painting.author.url}
                price={painting.price}
                quantity={painting.quantity}
                />
            </li>
            ))}
        </ul>
    );
}

PaintingList.proptype ={
    paintings:PropTypes.arrayOf(
        PropTypes.shape(
            {id:PropTypes.string.isRequired,
            imageUrl: PropTypes.string,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,}

        )
    )
}



export default PaintingList;