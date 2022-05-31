import Layout from '../components/layout'
import TopNav from '../components/topnav'
import Jumbo from '../components/jumbo'
import ProductList from '../components/product-list'
import Testimonials from '../components/testimonials'
import Video from '../components/video'
import BottomSection from '../components/bottom-section'

export default function Home() {
  return (
    <Layout title="Coffee Cow Merch Store">
      <TopNav isFrontPage />
      <Jumbo />
      <ProductList />
      <Testimonials />
      <Video />
      <BottomSection />
    </Layout>
  )
}
