import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import styles from './Cards.module.css'
import cx from 'classnames'
import CountUp from 'react-countup';
import './index.css';

const Cards = ({ data }) => {
  // console.log(data['Bengaluru Urban']);

  return (
    <div id="container" className={styles.container}>
      {/* charts */}
      <Grid container className={styles['card-style']} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary">
              Active Cases
              </Typography>
            <Typography variant="h4">
              <CountUp start={0} end={data} duration={2.75} />
            </Typography>
            <Typography color="textSecondary">
              lastUpdated(Date)
              </Typography>
            <Typography color="textSecondary">
              Number of Active Cases CareenaBirus
              </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary">
              Confirmed Cases
              </Typography>
            <Typography variant="h4">
              Number of Confirmed Cases(this is a number)
              </Typography>
            <Typography color="textSecondary">
              lastUpdated(Date)
              </Typography>
            <Typography color="textSecondary">
              Number of Confirmed Cases CareenaBirus
              </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary">
              Recovered Cases
              </Typography>
            <Typography variant="h4">
              Number of Recovered Cases(this is a number)
              </Typography>
            <Typography color="textSecondary">
              lastUpdated(Date)
              </Typography>
            <Typography color="textSecondary">
              Number of Recoveries from CareenaBirus
              </Typography>
          </CardContent>
        </Grid>


        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deceased)}>
          <CardContent>
            <Typography color="textSecondary">
              Deaths
              </Typography>
            <Typography variant="h4">
              Number of Deceased Cases(this is a number)
              </Typography>
            <Typography color="textSecondary">
              lastUpdated(Date)
              </Typography>
            <Typography color="textSecondary">
              Number of Deaths by CareenaBirus
              </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div >
  )
}

export default Cards;


