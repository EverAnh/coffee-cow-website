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
    this.state = { diff: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.setState({diff: dayjs('2023-10-09T17:17:39.000Z').diff(dayjs())});
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ diff: this.state.diff - 1000 });
  }

  render() {
    return(
      <Paper id="countdown" sx={{
        backgroundImage: 'url(../images/coffee_cup_pattern.png)',
        color: '#efe9e3',
        py: 8,
      }}>
        <Container>
          <Stack direction="column" spacing={0} sx={{justifyContent: "center", alignItems: "center", pb: 8}}>
            <Typography variant="h6" gutterBottom color="#d6d6d6">
              Time until 1.5 years has passed:
            </Typography>
            <Typography variant="h5">
              {dayjs.duration(this.state.diff).years() + " year " 
              + dayjs.duration(this.state.diff).months() + " months " 
              + dayjs.duration(this.state.diff).days() + " days " 
              + dayjs.duration(this.state.diff).hours() + " hours " 
              + dayjs.duration(this.state.diff).minutes() + " minutes " 
              + dayjs.duration(this.state.diff).seconds() + " seconds"}
            </Typography>
          </Stack>
        </Container>
        <Typography variant="subtitle2" align="right" sx={{mr: 8}}>
          Site made by /u/EverAnh
        </Typography>
      </Paper>
    )
  }
}

export default BottomSection;