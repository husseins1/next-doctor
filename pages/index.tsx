import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useContext } from 'react';
import Header from '../components/Header';
import { Context } from '../context';

const Home: NextPage = () => {
 


  
  return (
    < >
    <style jsx>
    {`
      .background{
        background:url("/images/hero.jpg"),rgba(0,0,0,0.5);
        background-blend-mode:overlay;
        background-size:cover;
        background-position:center;
      }

    `}
    </style>
      <Head>
        <title>Dentist</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta name="description" content="A dentist Website for Booking Sessions" />
        </Head>
        <div className="background h-[100vh]">
          <Header />

        </div>
        
    </>
  )
}

export default Home
