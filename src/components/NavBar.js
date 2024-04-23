import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/articles'>Articles</Link>
      </nav>
      <h2>Logo</h2>
      <nav>
        <Link href="/">Twitter</Link>
        <Link href="/">Twitter</Link>
        <Link href="/">Twitter</Link>
        <Link href="/">Twitter</Link>
      </nav>
    </header>
  )
}

export default NavBar;
