import Head from "next/head";
import Header from "../components/Header";
import Banner from '../components/Banner'
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/react";

export default function Home({products}) {
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      <Header/>

      <main className=" max-w-screen-2xl mx-auto">
        <Banner/>
        <ProductFeed products={products}/>
      </main>

      {/* ---- ---- */}
    </div>
  );
}

//https://fakestoreapi.com/products
export async function getServerSideProps(context){
  const session = await getSession(context)
  const products = await fetch('https://fakestoreapi.com/products')
                              .then(res=>res.json())
                              // .then(json=>console.log(json))
  return {
    props:{
      products, session
  }}
}
