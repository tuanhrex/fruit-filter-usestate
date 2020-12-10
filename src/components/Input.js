import React, { useState } from 'react';

function Input(props) {
    const [object, setObject] = useState({

    })

    return(
        <div>
            <label htmlFor="fruit-filter">Filter These Fruits: </label>
                <input type="text" name="fruit-filter" value={props.value} onChange={props.onChange}/> 
        </div>
    )
}

export default Input;