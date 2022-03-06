import type { NextPage } from 'next'
import { getProductsInCollection } from '../lib/shopify.js'
import ProductList from '../components/ProductList.js'

const Home: NextPage = ({ products }) => {
  console.log(products)

  return (
    <div className="">
        <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}

export default Home
