import React, { useEffect, useState } from 'react';
import Doner from '../Doner/Doner';
import Summary from '../Summary/Summary';
import './Fund.css';

const Fund = () => {
    const [persons, setPersons] = useState([]);
    const [donetlist, setDonetList] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    }, [])

    const handleAddToCart = person => {
        const newDonetList = [...donetlist, person];
        setDonetList(newDonetList);
    }

    return (
        <div>
            <div className='fund-style'>
                <div className='person-details'>
                    {
                    persons.map(person => <Doner 
                        key={person.id}
                        person={person}
                        handleAddToCart={handleAddToCart}
                        ></Doner>)
                    }
                </div>
                <div>
                    <Summary donetlist={donetlist}></Summary>
                </div>     
            </div>
        </div>
    );
};

export default Fund;