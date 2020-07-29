import React from 'react';
import { Bar } from 'react-chartjs-2'
import styles from './Charts.module.css'
import cx from 'classnames';
const Chart = ({ data: [confirmed, active, recovered, deceased] }) => {
  const barChart = (
    <Bar
      data={{
        labels: ['Confirmed', 'Active', 'Recovered', 'Deceased'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 0, 0.5)'],
            data: [confirmed, active, recovered, deceased]
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: "cases" },
      }}
    />
  )

  return (
    <div className={cx(styles.container)}>
      {barChart}
    </div>
  )
}



export default Chart;