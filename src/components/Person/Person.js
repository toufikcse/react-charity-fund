import React from 'react';
import './Person.css';

const Person = (props) => {
    console.log(props.person);
    const {img, name, company, age, country, donetedMoney} = props.person;
    return (
        <div>
            
        </div>
    );
};

export default Person;