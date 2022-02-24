import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useContext } from 'react';
import Header from '../components/Header';
import { Context } from '../context';

const Home: NextPage = () => {
 


  
  return (
    < >
     
      <Head>
        <title>Dentist</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta name="description" content="A dentist Website for Booking Sessions" />
        </Head>
          <Header />
        
    </>
  )
}

export default Home
