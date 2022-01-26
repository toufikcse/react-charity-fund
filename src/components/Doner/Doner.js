import React from 'react';
import './Doner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Doner = (props) => {
    // console.log(props.person);
    const {img, name, company, age, country, donetedMoney} = props.person;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='doner-style'>
            <div className='doner-details'>
                <img className='img myimg' src={img} alt="" />
                <h4>Name: {name}</h4>
                <h4>Company: {company}</h4>
                <h4>Age: {age}</h4>
                <h4>Country: {country}</h4>
                <h4>Per Donet Money: ${donetedMoney}</h4>
                <button onClick={() => props.handleAddToCart(props.person)} className='btn-regular'>{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Doner;