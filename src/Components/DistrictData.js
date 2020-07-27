import React from 'react'
import '../App.css';

export default function DistrictData({ districts }) {

  return (
    <div>
      <select>
        <option value="">Karnataka</option>
        {districts.map((d, i) => {
          return (
            <option key={i} value={d}>{d}</option>
          )
        })
        }
      </select>
    </div>
  )
}
