import Image from 'next/image';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function Video(props) {
  return (
    <Paper id="explainer" sx={{p: 4}}>
      <Container sx={{my: 2}}>
        <Stack direction="column" spacing={0} sx={{justifyContent: "center", alignItems: "center"}}>
          <Typography component="h1" variant="h3" gutterBottom align="center" sx={{fontFamily: 'Oxygen, sans-serif'}}>
            Explainer Video
          </Typography>
          <Divider sx={{my: 2}} />
          <Link href="https://www.youtube.com/watch?v=IR2_TDzzkKY">
            <Image
              src="/images/youtube-video-icon-3.jpg"
              width="500"
              height="320"
              alt="icon for an embedded YouTube video"
            />
          </Link>
        </Stack>
      </Container>
    </Paper>
  )
}