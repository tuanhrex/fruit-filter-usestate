import React, { useState } from 'react';

import List from './List';
import Input from './Input';

function FruitContainer(props) {
    const [object, setObject] = useState({
        fruitsToDisplay: props.fruits,
        filterValue: ''
    })

    const handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value;
        // Remove the fruits that don't contain filter value
        const filteredFruitList = props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase());
        })
        setObject({ fruitsToDisplay: filteredFruitList, filterValue})
    }

    return(
        <div>
            <Input value={object.filterValue} onChange={handleFilterChange}/>
            <List fruits={object.fruitsToDisplay}/>
        </div>
    )
}

export default FruitContainer;