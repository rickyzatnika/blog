import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import { AnimatePresence } from 'framer-motion';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    
      return (
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      );
    
  }
}
export default MyApp;