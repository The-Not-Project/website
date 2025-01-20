'use client';
import './page.scss';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('section.radar div:first-child');

    window.addEventListener('scroll', () => {
      nav != null && window.scrollY > 50
        ? nav.classList.remove('transparent')
        : nav.classList.add('transparent');

      overlay &&
        window.scrollY > window.innerHeight * 0.9 &&
        overlay.classList.add('shrink');
    });
  }, []);
  return (
    <main>
      <header>
        <nav className='transparent'>
          <div className='title-sm'>
            <Image
              src='/media/logo.png'
              alt='The Not Project Logo'
              width={120}
              height={120 * (9 / 16)}
            />
          </div>
          <div className='title-lg'>THE NOT PROJECT</div>
          <button>DONATE</button>
        </nav>
        <div className='quote'>“Not who they expected, exactly who I am”</div>
        <div className='center-title'>Unbridled Stories, Untamed Voices.</div>
      </header>
      {/* <Link href="/borough/queens">Queens</Link>
    <br />
    <Link href="/borough/brooklyn">Brooklyn</Link>
    <br />
    <Link href="/borough/manhattan">Manhattan</Link> */}
      <section className='radar'>
        <div>
          <p>Our Radar</p>
          {/* <span>
            Discover our latest intriguing story that captures the essence of
            our mission. Stay tuned for more updates and insights.
          </span> */}
          <div className='overlay'></div>
        </div>
        <div></div>
      </section>
    </main>
  );
}
