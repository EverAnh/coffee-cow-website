import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Jumbo(props) {
  return (
    <Grid container component="main" id="home">
      <Grid item xs={12} sm={8} md={6}>
        <Stack
          direction="column"
          justifyContent="center"
          sx={{
            py: 32,
            px: 8,
            backgroundImage: 'url(../images/coffee_cup_pattern.png)',
            color: '#efe9e3'
          }}
        >
          <Typography component="h1" variant="h3" gutterBottom color="#d3c4b3" sx={{fontFamily: 'Oxygen, sans-serif'}}>
            Espresso yourself and be herd.
          </Typography>
          <Typography variant="h5">
            The Coffee Cow™ merch collection is as drippy as a fresh morning brew. You can cownt on looking udderly amazing, whether you&apos;re grinding beans or grinding bosses.
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(../images/atrioc_mug_ss.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  )
}
