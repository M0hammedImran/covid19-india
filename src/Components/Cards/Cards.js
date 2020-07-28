import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import styles from './Cards.module.css'
import cx from 'classnames'
import CountUp from 'react-countup';
import './index.css';

const Cards = ({ className, data: [confirmed = 0, active = 0, recovered = 0, deceased = 0, lastUpdated = 'N/A'] }) => {
  // console.log(confirmed, active, recovered, deceased);
  return (
    <div id="container" className={cx(styles.container, className.name)}>
      {/* charts */}
      <Grid container className={styles['card-style']} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.confirmed)}>
          <CardContent>
            <Typography color="textPrimary">
              Confirmed Cases
              </Typography>
            <Typography variant="h4">
              <CountUp start={0} end={confirmed} duration={1.3} />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdated}
            </Typography>
            <Typography color="textSecondary">
              No.of Confirmed Cases of Covid-19.
              </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textPrimary">
              Active Cases
              </Typography>
            <Typography variant="h4">
              <CountUp start={0} end={active} duration={1.5} />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdated}
            </Typography>
            <Typography color="textSecondary">
              No.of Active Cases Covid-19.
              </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textPrimary">
              Recovered Cases
              </Typography>
            <Typography variant="h4">
              <CountUp start={0} end={recovered} duration={1.7} />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdated}
            </Typography>
            <Typography color="textSecondary">
              No.of Recoveries from Covid-19.
              </Typography>
          </CardContent>
        </Grid>


        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deceased)}>
          <CardContent>
            <Typography color="textPrimary">
              Deaths
              </Typography>
            <Typography variant="h4">
              <CountUp start={0} end={deceased} duration={2} />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdated}
            </Typography>
            <Typography color="textSecondary">
              No.of Deaths by Covid-19.
              </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div >
  )
}

export default Cards;


