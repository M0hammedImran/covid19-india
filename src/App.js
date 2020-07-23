import React, { useState, useEffect } from 'react';
import './App.css';
import { API_KEY } from './env.js'

function App() {

  let date = new Date().getDate();
  let month = new Date().getMonth();
  month++;
  month = month.toString().length !== 1 ? month : `0${month}`;
  let fullYear = new Date().getFullYear();
  let today = `${fullYear}-${month}-${date}`

  const [covidData, setCovidData] = useState({
    "loading": true,
    "confirmed": 0,
    "deceased": 0,
    "migrated": 0,
    "recovered": 0,
    "population": 0,
    "tested": 0,
    "lastUpdated": today,
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_KEY);
        const data = await response.json();

        let bengaluruData = data.KA.districts['Bengaluru Urban'];
        let population = bengaluruData.meta.population;
        let lastUpdated = bengaluruData.meta.tested.last_updated;
        let { confirmed, deceased, migrated, recovered, tested } = bengaluruData.total;

        setCovidData({
          loading: false,
          confirmed,
          deceased,
          migrated,
          recovered,
          population,
          tested,
          lastUpdated
        });
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      {JSON.stringify(covidData)}
    </div>
  );
}

export default App;
