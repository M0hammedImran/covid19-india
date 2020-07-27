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

  const [districtData, setDistrictData] = useState({
    data: {},
    district: '',
  });

  const handleDistrictChange = (district) => {
    const data = covidData.districts;
    const parsedData = data.filter(dist => {
      return dist[district]
    })
    setDistrictData({ data: parsedData[0], district: district });
  }

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
  let distValues = []
  // console.log(districtData.data)
  const changingView = () => {
    if (districtData.district.length <= 1) return;

    let { data, district } = districtData
    let { active, meta, total } = data[district];
    let lastUpdated = meta.tested['last_updated'];
    let { confirmed, deceased, recovered } = total;

    distValues = [confirmed, active, recovered, deceased, lastUpdated]
    console.log(confirmed, active, recovered, deceased, lastUpdated)
  }
  changingView();

  // const dummyData = [130000, 70000, 50000, 2000]
  return (
    <div className="App">
      {covidData.isLoading ? <img src={loading} alt="loading gif" /> :
        <>
          <h1>{districtData.district}</h1>
          <DistrictSearch className={DistrictSearch} data={covidData.districts} handleDistrictChange={handleDistrictChange} />
          <Cards className={Cards} data={distValues} />
          <Chart className={Chart} data={distValues} />
        </>

      }
    </div>
  );
}

export default App;
