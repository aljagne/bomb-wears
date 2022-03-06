import type { NextPage } from 'next'
import { getProductsInCollection } from '../lib/shopify.js'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = ({ products }) => {
  console.log(products)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        Hello from Bomb-wears shopify next.js
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
