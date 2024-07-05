import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer>
      <Layout>
        <span>Rights</span>
        <Link href="/">CodeBucks</Link>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  );
}

export default Footer;
