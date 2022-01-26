import React from 'react';
import Person from '../Person/Person';
import './Doner.css';

const Doner = (props) => {
    const persons = props.persons;
    return (
        <div className='doner-style'>
            {
                persons.map(person => <Person person={person}></Person>)
            }
        </div>
    );
};

export default Doner;