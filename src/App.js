import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { API_KEY, STATE_WISE_API_KEY } from './env.js';
import loading from './assets/loading.gif';
import Cards from './Components/Cards/Cards'
import DistrictSearch from './Components/DistrictSearch/DistrictSearch'
import Chart from './Components/Charts/Charts.js'

function App() {
  const [covidData, setCovidData] = useState({
    districts: [],
    isLoading: true,
  });

  const [districtData, setDistrictData] = useState({
    data: {},
    district: '',
  });

  const distValues = useRef([]);
  const karnatakaValues = useRef([]);

  const handleDistrictChange = (district) => {
    const data = covidData.districts;
    const parsedData = data.filter(dist => {
      return dist[district];
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
        let active = [];

        let eachDistrictV1 = Object.keys(districtWiseV1);
        let eachDistrictV2 = Object.keys(districtWiseV2);

        eachDistrictV2.forEach(dist => {
          active.push(districtWiseV2[dist].active);
        });

        eachDistrictV1.forEach((dist, index) => {
          let obj = {};
          obj[dist] = districtWiseV1[dist];
          obj[dist].active = active[index];
          districts.push(obj);
        });

        let karnatakaData = dataV1.KA.total;
        let { confirmed, deceased, recovered } = karnatakaData;
        let totalActiveCases = active.reduce((a, b) => a + b, 0);
        let lastUpdated = dataV1.KA.meta.last_updated.toString();
        lastUpdated = lastUpdated.slice(0, 10).split('-').reverse().join('-');
        karnatakaValues.current = [confirmed, totalActiveCases, recovered, deceased, lastUpdated]

        setCovidData({ isLoading: false, districts: districts });

      } catch (error) { console.log(error); }
    }
    fetchData();
  }, []);

  const changingView = () => {
    if (districtData.district.length <= 1 || districtData.district === 'Karnataka') {
      distValues.current = karnatakaValues.current;
    } else {
      let { data, district } = districtData;
      let { active, meta, total } = data[district];
      let lastUpdated = meta.tested['last_updated'];
      let { confirmed, deceased, recovered } = total;

      distValues.current = [confirmed, active, recovered, deceased, lastUpdated]
    }
  }
  changingView();

  return (
    <div className="App">
      {covidData.isLoading ? <img className='loading-img' src={loading} alt="loading gif" /> :
        <>
          <header>
            <h1>Covid-19 Data</h1>
            <h2 id='districtName'>{districtData.district || "Karnataka"}</h2>
          </header>

          <div className='district-search'>
            <DistrictSearch className={DistrictSearch} data={covidData.districts} handleDistrictChange={handleDistrictChange} />
          </div>

          <div className='chart'>
            <Chart className={Chart} data={distValues.current} />
          </div>

          <div className='cards'>
            <Cards className={Cards} data={distValues.current} />
          </div>

          <footer>
            <p>Author: Mohammed Imran</p>
          </footer>

        </>
      }
    </div>
  );
}

export default App;
