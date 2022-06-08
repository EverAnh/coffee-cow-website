import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ProductCard from '../components/product-card'

export default function ProductList(props) {
  return (
    <Container id='products'>
      <Grid container spacing={4} py={{xs: 4, md: 8}}>

        <Grid item xs={12}>
          <Typography variant='h3' align='center' sx={{display: {xs: 'block', md: 'none'} }}>
            Products
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <ProductCard 
            productName='Emojis T-Shirt'
            price='$25 USD'
            img='../images/ccm_shirt.png'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProductCard
            productName='Emojis Hat'
            price='$30 USD'
            img='../images/ccm_hat.png'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProductCard 
            productName='Emojis Hoodie'
            price='$50 USD'
            img='../images/ccm_hoodie.png'
          />
        </Grid>
        <Grid item xs={12}>
          <Alert severity='info' color='secondary' sx={{justifyContent: 'center'}}>
            <Typography fontSize='medium'>
              DISCOUNT CODE: MOOARKETING
            </Typography>
          </Alert>
        </Grid>
      </Grid>
    </Container>
  )
}
