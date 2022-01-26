import React, { useEffect, useState } from 'react';
import Doner from '../Doner/Doner';

const Fund = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    }, [])

    return (
        <div>
            <div className='fund-style'>
               <Doner persons={persons}></Doner>
            </div>
        </div>
    );
};

export default Fund;