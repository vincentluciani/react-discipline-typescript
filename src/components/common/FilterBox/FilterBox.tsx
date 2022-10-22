import React, { useState, useEffect } from 'react';   

const FilterBox = () => {
    const [filterValue,setFilterValue] = useState('')
    const [anotherValue,setAnotherValue] = useState('')

    useEffect(() => {
        setAnotherValue(filterValue)
    }, [filterValue])

    const handleChange = (inputEvent: any) => {
        if (inputEvent.target && inputEvent.target.value){
            setFilterValue(inputEvent.target.value)
        }
    }
    return (
        <div className="filter-wrapper">
            <div className="edit-label">{filterValue}</div>
            <input type="text" value={filterValue} onChange={inputEvent => handleChange(inputEvent)} />
            <div className="edit-label">{anotherValue}</div>
        </div>
    )

}

export default FilterBox