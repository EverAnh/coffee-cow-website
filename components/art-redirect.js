import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function ArtRedirect(props) {
  return (
    <Paper sx={{pt: 4, pb: 8}}>
      <Container sx={{my: 2}}>
        <Stack direction="column" spacing={0} sx={{justifyContent: "center", alignItems: "center"}}>
          <Typography component="h1" variant="h3" gutterBottom align="center" sx={{fontFamily: 'Oxygen, sans-serif'}}>
            Fan Art Archive
          </Typography>
          <Button href="/art" variant="contained">Go To Art Page</Button>
        </Stack>
      </Container>
    </Paper>
  )
}