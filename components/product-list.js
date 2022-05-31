import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import ProductCard from '../components/product-card';

export default function ProductList(props) {
  return (
    <Container id="products" sx={{my: 12}}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          <ProductCard 
            productName="Emojis T-Shirt"
            price="$25 USD"
            img="../images/ccm_shirt.png"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProductCard
            productName="Emojis Hat"
            price="$30 USD"
            img="../images/ccm_hat.png"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProductCard 
            productName="Emojis Hoodie"
            price="$50 USD"
            img="../images/ccm_hoodie.png"
          />
        </Grid>
      </Grid>
      <Alert severity="info" color="secondary" sx={{my: 6, justifyContent: "center"}}>
        <Typography fontSize="medium">
          DISCOUNT CODE: MOOARKETING
        </Typography>
      </Alert>
    </Container>
  )
}
