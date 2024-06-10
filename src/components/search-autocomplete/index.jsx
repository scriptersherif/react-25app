import React, { useEffect, useState } from "react";
import "./style.css";
function Search_autocomplete() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [result, setResult] = useState(false);

  async function logMovies() {
    const response = await fetch(
      "https://dummyjson.com/products?limit=100&skip=10"
    );
    const movies = await response.json();
    console.log(movies.products);
    setData(movies.products);
  }

  const handleFilter = (event) => {
    const searchTerm = event.target.value;
    setInput(searchTerm);
    setFilterData(
      data.filter((item) =>
        item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
    setResult(false);
  };

  const onSelection = (selection) => {
    setInput(selection);
    setResult(true);
  };

  useEffect(() => {
    logMovies();
  }, []);

  return (
    <div>
      <input type="text" value={input} onChange={handleFilter} />
      <div>
        {input
          ? filterData.length > 0
            ? !result &&
              filterData.map((item) => (
                <div key={item.id} onClick={() => onSelection(item.title)}>
                  {item.title}
                </div>
              ))
            : !result && <div>No data found</div>
          : data.map((item) => (
              <div key={item.id} onClick={() => onSelection(item.title)}>
                {item.title}
              </div>
            ))}
      </div>
    </div>
  );
}

export default Search_autocomplete;
