import React, { useState, useEffect } from 'react';
import './App.css';
import { API_KEY, STATE_WISE_API_KEY } from './env.js';
// import Stat from './Components/Stat.js';
import loading from './assets/loading.gif';
import Cards from './Components/Cards/Cards'
import DistrictSearch from './Components/DistrictSearch/DistrictSearch'
import Chart from './Components/Charts/Charts.js'

function App() {
  const [covidData, setCovidData] = useState({
    districts: [],
    isLoading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseV1 = await fetch(API_KEY);
        const dataV1 = await responseV1.json();

        const responseV2 = await fetch(STATE_WISE_API_KEY);
        const dataV2 = await responseV2.json();

        let districtWiseV1 = dataV1.KA.districts;
        let districtWiseV2 = dataV2.Karnataka.districtData;

        let districts = [];
        let active = []

        let eachDistrictV1 = Object.keys(districtWiseV1);
        let eachDistrictV2 = Object.keys(districtWiseV2);

        eachDistrictV2.forEach(dist => {
          active.push(districtWiseV2[dist].active)
        });

        eachDistrictV1.forEach((dist, index) => {
          let obj = {}
          obj[dist] = districtWiseV1[dist];
          obj[dist].active = active[index]
          districts.push(obj);
        });

        setCovidData({ isLoading: false, districts: districts });

      } catch (error) { console.log(error); }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {covidData.isLoading ? <img src={loading} alt="loading gif" /> :
        <>
          <DistrictSearch data={covidData.districts} />
          <Cards data={70000} />
          <Chart data={[70000, 130000, 50000, 2000]} />
        </>

      }
    </div>
  );
}

export default App;

// const data = [
//   {
//     "chikmagaluru": {
//       active: 100,
//       deceased: 100,
//     }
//   },
// ]
