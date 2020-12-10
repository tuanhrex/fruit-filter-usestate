import React, { useState } from 'react';

function List(props) {
    const [object, setObject] = useState({

    })

    const fruitItems = props.fruits.map ((eachFruit, index) => {
        return <li key={index}>{eachFruit}</li>
    })
    return(
        <div>
            {fruitItems}
        </div>
    )
}

export default List