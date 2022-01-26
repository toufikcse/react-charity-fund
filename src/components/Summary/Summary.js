import React from 'react';
import './Summary.css';

const Summary = (props) => {
    // console.log(props);
    const doners = props.donetlist;
    let total = 0;
    for(const doner of doners) {
        total = total + doner.donetedMoney;
    }

    return (
        <div className='summary-style'>
            <h4>Doners Added: {doners.length}</h4>
            <h4>Total Doneted Money: $ {total} </h4>
            <hr />
            {
                doners.map(doner => <h4>{doner.name}</h4>)
            }
        </div>
    );
};

export default Summary;