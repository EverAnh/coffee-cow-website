import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'

export default function Testimonials(props) {
  return (
    <Paper id="testimonials-anchor" sx={{py: 4}}>
    <Container sx={{my: 2}}>
      <Typography component="h1" variant="h3" gutterBottom align="center" sx={{fontFamily: 'Oxygen, sans-serif'}}>
        Testimonials
      </Typography>
      <Divider sx={{my: 4}} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h5" align="center">
              &quot;Moo... I&apos;m a marketer... moo... and I love coffee. I&apos;m the coffee cow.&quot;
            </Typography>
            <Stack direction="row" sx={{justifyContent: "center", alignItems: "center"}}>
              <Avatar
                alt=""
                src="../images/furry.png"
                elevation="1"
                sx={{ width: 64, height: 64, border: "2px solid white" }}
              />
              <Typography variant="h6" sx={{ml: 2, my: 0, height: "fit-content"}}>
                The Coffee Cow
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h5" align="center">
              &quot;This community is <em>sick</em> ...<br /> it&apos;s off the rails!&quot;
            </Typography>
            <Stack direction="row" sx={{justifyContent: "center", alignItems: "center"}}>
              <Avatar
                alt=""
                src="../images/jake.png"
                elevation="1"
                sx={{ width: 64, height: 64, border: "2px solid white" }}
              />
              <Typography variant="h6" sx={{ml: 2, my: 0, height: "fit-content"}}>
                Brandon C.C. Mooing
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h5" align="center">
              <br />
              &quot;It will sell better than the tank top.&quot;
            </Typography>
            <Stack direction="row" sx={{alignItems: "center"}}>
              <Avatar
                alt=""
                src="../images/gigachad.png"
                elevation="1"
                sx={{ width: 64, height: 64, border: "2px solid white" }}
              />
              <Typography variant="h5" sx={{ml: 2, my: 0, height: "fit-content"}}>
                Twitch Chat
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </Paper>
  )
}
