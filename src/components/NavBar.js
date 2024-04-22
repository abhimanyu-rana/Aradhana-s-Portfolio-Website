import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex intems-center justify-between'>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/articles'>Articles</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" target={"_blank"}>Twitter</Link>
        <Link href="/" target={"_blank"}>Twitter</Link>
        <Link href="/" target={"_blank"}>Twitter</Link>
        <Link href="/" target={"_blank"}>Twitter</Link>
      </nav>
    </header>
  );
};

export default NavBar;
