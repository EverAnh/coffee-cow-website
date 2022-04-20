import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';

export default function ProductCard(props) {
  return (
    <Link
      href="https://www.strawpoll.me/46029621"
      underline="none"
    >
      <Card
        raised
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.img}
            alt="random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.productName}
            </Typography>
            <Typography>
              {props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}