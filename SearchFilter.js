import React, { useState } from "react";
export default function SearchFilter()
{
    const list = [
        "Banana", "apple" , "orange", "pineapple"];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) =>
    {
        if(event.target.value === "")
        {
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter(
            (item) =>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
            setFilterList(filteredValues);
        
    };
    return(
        <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
    )
    
};