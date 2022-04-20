import React from 'react'
import ReactDOM from 'react-dom'
import dayjs from 'dayjs'
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

class BottomSection extends React.Component {

  constructor() {
    super();
    this.timer = 0;
    this.state = { target: dayjs('2023-10-09T17:17:39.000Z'), now: {} };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.setState({now: dayjs() });
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.timer = setInterval(this.tick, 1000);
    this.setState({ now: dayjs() });
  }

  render() {
    return(
      <Paper id="countdown-anchor" sx={{
        backgroundImage: 'url(../images/coffee_cup_pattern.png)',
        color: '#efe9e3',
        py: 8,
      }}>
        <Container>
          <Stack direction="column" spacing={0} sx={{justifyContent: "center", alignItems: "center", pb: 8}}>
            <Typography variant="h5" gutterBottom color="#d6d6d6">
              Time until 1.5 years has passed:
            </Typography>
            <Typography variant="h4">
              {dayjs.duration(this.state.target.diff(this.state.now)).years() + " year " 
              + dayjs.duration(this.state.target.diff(this.state.now)).months() + " months " 
              + dayjs.duration(this.state.target.diff(this.state.now)).days() + " days " 
              + dayjs.duration(this.state.target.diff(this.state.now)).hours() + " hours " 
              + dayjs.duration(this.state.target.diff(this.state.now)).minutes() + " minutes " 
              + dayjs.duration(this.state.target.diff(this.state.now)).seconds() + " seconds"}
            </Typography>
          </Stack>
          <Divider light />
        </Container>
        <Typography variant="subtitle1" align="right" sx={{mr: 8}}>
          Site made by /u/EverAnh
        </Typography>
      </Paper>
    )
  }
}

export default BottomSection;