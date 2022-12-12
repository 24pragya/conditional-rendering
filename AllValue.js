import React from 'react'

function AllValue({isBetween,select_column,select_condition,select_condition_type,select_from,select_to,select_value}) {
    return (
        <div>
            <p>column - {`${select_column}`}</p>
            <p>condition - {`${select_condition}`}</p>
            <p>condition type - {`${select_condition_type}`}</p>
            {!isBetween ? <p>value - {`${select_value}`}</p>
             : <div><p> from - {`${select_from}`}</p>
                <p> to - {`${select_to}`}</p></div>
            }
        </div>
    )
}

export default AllValue