import React from 'react'
import '../App.css';
import DistrictData from './DistrictData'


export default function Stat(props) {
  let districtWise = props.covidData.districts
  let districts = []
  districtWise.forEach(dist => districts.push(Object.keys(dist)[0]));
  return (
    <div className="stat">

      {districts.map((district, index) =>
        district === 'Bengaluru Urban' ?
          <React.Fragment key={index}>
            <p key={district}> {districtWise[index][district].active} </p>
          </React.Fragment> : null)
      }
      <DistrictData districts={districts} />

    </div>
  )
}



// confirmed,
// deceased,
// migrated,
// recovered,
// population,
// tested,
// lastUpdated