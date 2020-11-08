import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from './header';
import Footer from './footer';

const Layout = props => (
  <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Hindustan Daily" />
        <meta name="description" content="Hindustan Daily best online news platform" />
        <meta name="keywords" content="Hindustan Daily, India's news online, Telugu News, Andhra News, Telangana News, Hindustan News, Bharat News, Movie reviews" />
        <title>Hindustan Daily, India's No.1 news online</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {props.children}
      <Footer />
  </>
)
export default Layout
