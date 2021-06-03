import Link from 'next/link';
import { useState } from 'react';

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
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
  );
};

export default MobileNav;
