import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Layout from '../components/layout'
import TopNav from '../components/topnav'

const pieces = [
  {
    artistName: 'Avornell',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u28xlp/woke_up_and_got_slapped_in_the_face_with_cow/',
    fileName: 'pbhnmox9t5t81.jpg',
  },
  {
    artistName: 'CharcoalMusket',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u1l6x4/made_art_for_our_favorite_caffeinated_bovine/',
    fileName: 'otygj0a8lzs81.png',
  },
  {
    artistName: 'CharcoalMusket',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/uiok1u/holy_cow_coffee/',
    fileName: 'v71p5nkswkx81.png',
  },
  {
    artistName: 'Duzclops',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/v29it6/big_a_i_drew_a_coffee_cow_and_i_apologize_for_how/',
    fileName: 'p1uw61ab3y291.png',
  },
  {
    artistName: 'Fadielusions',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u5867g/burgzy_is_the_product_of_coffee_cow/',
    fileName: 'v1nw852spyt81.jpg',
  },
  {
    artistName: 'Gina_key',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u5rrei/the_glamourai_on_his_everloyal_coffee_cow/',
    fileName: '6qut9u5vi4u81.png',
  },
  {
    artistName: 'Izyomi',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/v1hgbh/quick_little_drawing_from_today_the_coffee_cow/',
    fileName: '4zo11ysahq291.png',
  },
  {
    artistName: 'Kraftquackandcheese',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u10w2y/coffee_cow_album_art_original_art/',
    fileName: 'lzlndtrxbus81.png',
  },
  {
    artistName: 'MilkBudBub',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u4eu33/coffee_cow_but_instead_hes_a_marketable_mascot/',
    fileName: 'f8349ez0jqt81.png',
  },
  {
    artistName: 'NewJorrik9',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/uqpzxf/art_should_comfort_the_disturbed_and_disturb_the/',
    fileName: 'a3320c85fsz81.jpg',
  },
  {
    artistName: 'N0ma_arts',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u6tcgj/brandon_coffee_cow_ewing_aka_atrioc_when_he/',
    fileName: 'kkx3gypp3eu81.jpg',
  },
  {
    artistName: 'Otunah',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u8si6w/incoming_brand_change/',
    fileName: '13tzwdhvzwu81.png',
  },
  {
    artistName: 'PeachesAndGore',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/ud8u81/coffee_cow_the_palette_is_different_coffee_beans/',
    fileName: 'fyokyt6fv3w81.jpg',
  },
  {
    artistName: 'Pilk_peeth',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u0b89s/one_of_big_as_famous_coffee_cow_moments/',
    fileName: 'hvcl9vyc4ns81.jpg',
  },
  {
    artistName: 'Prior_Cartoonist_142',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u8n1hx/made_a_3d_model_of_the_coffee_cow_check_comment/',
    fileName: 'goszdv5aqvu81.png',
  },
  {
    artistName: 'Saltwaterdvd',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u3g6aw/the_coffee_cow_promotion_last_image_hits_hard/',
    fileName: '8bk0xpaukht81.png',
  },
  {
    artistName: 'Shyamadash',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u4tto3/when_my_friends_ask_what_the_atrioc_stream_is_all/',
    fileName: 'zur6x5m3wut81.jpg',
  },
  {
    artistName: 'TheComedian__',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u06mqi/i_noticed_how_much_atrioc_talks_about_how_he_just/',
    fileName: 'r3fchjflols81.jpg',
  },
  {
    artistName: 'Thelogicaleo',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/uw28zz/inspired_by_peys_songs_from_the_story_of_the/',
    fileName: '30oeb89bq8191.jpg',
  },
  {
    artistName: 'Vinibruh',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/u6tmwj/big_a_everyday_when_he_goes_to_work/',
    fileName: 'ac5o8y956eu81.png',
  },
  {
    artistName: 'WhisKeyKilo101',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/ubub3h/mr_coffee_cow/',
    fileName: 't0osl5f9gqv81.png',
  },
  {
    artistName: 'Zulgul',
    sourceUrl: 'https://www.reddit.com/r/atrioc/comments/ujpmy8/yep_coca_cow/',
    fileName: 'btylynq6gvx81.png',
  },
];

export default class ArtPage extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout title='Fan Art Archive - Coffee Cow Website'>
        <TopNav />
        <Container disableGutters>
          <Stack direction='column' spacing={2} p={4} pt={{xs: 12, md: 15}}>
            <Typography
              component='h1'
              variant='h3'
              align='center'
            >
              Fan Art Archive
            </Typography>
            <Typography variant='body1' paragraph>
              Many artworks of the coffee cow have been posted to the subreddit, and this page is an index of them in one, easy-to-find place. The &quot;feed&quot; structure of reddit means that some posts can be missed, and it&apos;s hard to find things again. Atrioc himself has skipped the <em>Reddit Recap</em> on several weeks when good fan art was posted. With this page, he and everyone else has another chance to see any art that might&apos;ve been missed.
            </Typography>
            <Divider />
            <Typography variant='body1' align='center'>
              Opinion survey: which artwork would you pay for if merch were made available by the artist?
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Button href='https://www.strawpoll.me/46067278' color='primary' variant='contained'>
                Go to poll
              </Button>
            </Stack>
          </Stack>
          <ImageList cols={3} >
            {pieces.map((e) => (
              <ImageListItem key={e.fileName}>
                <Link href={e.sourceUrl}>
                  <CardMedia
                    component='img'
                    image={'../images/fan-art/' + e.fileName}
                    alt={e.artistName + '\'s fan art'}
                    sx={{
                      height: {xs: '33vw', sm: '33vw', md: '25vw'}
                    }}
                  />
                </Link>
                <ImageListItemBar
                  title={`By ${e.artistName}`}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Stack
            direction='row'
            spacing={2}
            justifyContent='center'
            sx={{p: 6}}
          >
            <Button href='https://www.strawpoll.me/46067278' color='primary' variant='contained'>
              Go to poll
            </Button>
          </Stack>          
        </Container>
      </Layout>
    )
  }
}
