import React from 'react'
import './App.css';

function Stat(props) {
  const keys = Object.keys(props.bengaluruData);
  return (
    <div className="stat">
      <h3>Covid-19 Bangalore</h3>
      <div> {keys.map((key, index) => {
        if (index !== 0) {
          return <p key={index} className="keys">{`${key.replace(/^\w/, c => c.toUpperCase())}: ${props.bengaluruData[key]}`}</p>
        }
      })}
      </div>
    </div>
  )
}

export default Stat
// confirmed,
// deceased,
// migrated,
// recovered,
// population,
// tested,
// lastUpdated