import Link from 'next/link';
import { useState } from 'react';

import '../styles/globals.css';
// Removing aside classes fixes mobile menu bar
// make menu unscrollable on mobile
// maybe use another component that covers entire screen

function MyApp({ Component, pageProps }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="relative min-h-screen md:flex font-serif bg-beige-light">
      {/* mobile menu bar */}
      <div className="md:hidden flex justify-between">
        <Link href="/">
          <a>
            <span className="block p-4 font-medium text-2xl md:text-5xl">
              Uncertain Fiasco
            </span>
          </a>
        </Link>

        <button
          className="p-4 focus:outline-none focus:bg-gray-300"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            className="h-8 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
          <span className="text-sm underline">Menu</span>
        </button>
      </div>

      {/* fixed sidebar */}
      <div>
        <aside className="md:h-screen sticky top-0">
          <div
            className="h-screen bg-seaweed text-white lg:w-80 space-y-6 py-7 px-2 -translate-x-full w-72 absolute inset-y-0 left-0 transform
              md:relative md:translate-x-0 transition duration-200 ease-in-out"
          >
            {/* logo */}
            <div className={navOpen ? `flex justify-between` : ''}>
              <Link href="/">
                <a className="text-white px-4">
                  <h1 className={`text-2xl md:text-5xl lg:text-6xl px-4`}>
                    Uncertain Fiasco
                  </h1>
                </a>
              </Link>
              <button
                className={`px-4 focus:outline-none ${navOpen ? '' : 'hidden'}`}
                onClick={() => setNavOpen(!navOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-sm underline">Close</span>
              </button>
            </div>

            {/* nav */}
            <nav className="font-mono">
              <Link href="/">
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-seaweed-light">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-seaweed-light">
                  About
                </a>
              </Link>
              <Link href="/archives">
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-seaweed-light">
                  Archives
                </a>
              </Link>
              <Link href="/contact">
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-seaweed-light">
                  Contact
                </a>
              </Link>
            </nav>
          </div>
        </aside>
      </div>

      {/* ring border */}

      <div
        className="bg-contain bg-repeat-y z-10 hidden md:block min-h-full w-10 -ml-5"
        style={{
          backgroundImage: 'url( /ring.svg)',
        }}
      ></div>

      {/* content */}
      <div className="bg-repeat-y bg-left flex-1 pt-3 pr-10 pl-12">
        <header>
          Content goes here
          <Component {...pageProps} />
        </header>
      </div>
    </div>
  );
}

export default MyApp;
