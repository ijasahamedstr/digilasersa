import React, { useState, useEffect } from 'react';

function Undercontration() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API (replace with your actual API endpoint)
    fetch('http://localhost:8000/Promotionalgifts')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Store the fetched data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1>Data Count: {data.length}</h1>
      {/* Optionally display the data */}
    </div>
  );
}

export default Undercontration;
