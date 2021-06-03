import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();
  const active = 'text-seaweed-light bg-gray-900';

  return (
    <aside className="md:h-screen sticky top-0">
      <div
        className="h-screen bg-seaweed text-white w-72 lg:w-80 space-y-6 py-24 pl-2 absolute inset-y-0 left-0 transform -translate-x-full
      md:relative md:translate-x-0 transition duration-200 ease-in-out"
      >
        {/* logo */}
        <div>
          <Link href="/">
            <a className="text-white px-4 space-x-2">
              <span className="text-2xl md:text-5xl lg:text-6xl px-4 flex items-center transition duration-200 hover:text-gray-800">
                Uncertain Fiasco
              </span>
            </a>
          </Link>
        </div>

        {/* nav */}
        <nav className="font-mono pr-10">
          <ul>
            <li>
              <Link href="/">
                <a
                  className={`block my-2 py-1 px-4 rounded transition duration-200 hover:bg-seaweed-light hover:text-gray-800 lg:text-lg ${
                    pathname === '/' ? active : ''
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={`block my-2 py-1 px-4 rounded transition duration-200 hover:bg-seaweed-light hover:text-gray-800 lg:text-lg ${
                    pathname === '/about' ? active : ''
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/archives">
                <a
                  className={`block my-2 py-1 px-4 rounded transition duration-200 hover:bg-seaweed-light hover:text-gray-800 lg:text-lg ${
                    pathname === '/archives' ? active : ''
                  }`}
                >
                  Archives
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`block my-2 py-1 px-4 rounded transition duration-200 hover:bg-seaweed-light hover:text-gray-800 lg:text-lg ${
                    pathname === '/contact' ? active : ''
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* footer */}
        <div className="absolute bottom-5 flex w-full justify-evenly pl-4 pr-10 mb-10">
          {/* github */}
          <a
            href="https://github.com/r-ilagan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-gray-300 hover:text-gray-800 transition-colors duration-200"
          >
            <svg
              className="h-7 w-7"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
          {/* twitter */}
          <a
            href="https://www.instagram.com/quackingquackquack/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-gray-300 hover:text-gray-800 transition-colors duration-200"
          >
            <svg
              className="h-7 w-7"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
            </svg>
          </a>
          {/* newsletter */}
          <a
            href="#"
            className="text-white dark:text-gray-300 hover:text-gray-800 transition-colors duration-200"
          >
            <svg
              className="h-7 w-7"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M375.4 17.744l-78 25.998V265.73l14-3.5V94.64l64-20zM433.3 126.31L329.4 152.282v124l-38.815 9.703-11.184 2.797v-124L207.29 182.81c5.175 3.946 9.705 8.82 13.513 14.323 10.15 14.657 16.29 33.678 20.427 54.357 7.38 36.9 8.056 78.79 8.125 110.252l238.012-59.504c-.043-31.71-.572-75.13-7.79-111.217-3.863-19.32-9.72-36.3-17.573-47.64-7.664-11.072-16.21-16.8-28.702-17.07zM176.4 190.255c-13.374 0-22.212 5.21-29.91 15.047-7.7 9.838-13.472 24.664-17.304 41.906-.835 3.755-1.572 7.622-2.236 11.558l93.107-18.622v-.002c-.45-1.635-.92-3.243-1.406-4.822-.48-1.562-.975-3.094-1.487-4.595l-.016-.05c-.013-.04-.028-.076-.04-.115-.478-1.393-.973-2.756-1.48-4.093l-.15-.402c-.522-1.366-1.055-2.705-1.607-4.008-.046-.108-.095-.212-.14-.32-.502-1.172-1.018-2.313-1.544-3.43l-.39-.826c-.17-.353-.34-.705-.514-1.052-.284-.57-.572-1.134-.863-1.688-.087-.162-.17-.33-.255-.49-.392-.734-.792-1.448-1.196-2.15-.12-.208-.24-.41-.36-.614-.305-.52-.614-1.032-.926-1.533-.128-.206-.257-.412-.386-.615-.427-.67-.858-1.328-1.297-1.963-7.852-11.344-16.6-17.124-29.6-17.124zm26.298 71.72l-87.723 17.544 43.862 14.933zm23.025 5.346l-63.758 47.21L89.4 289.827v68.332l141.607-24.414c-.562-21.47-1.945-44.85-5.284-66.422zm5.56 84.637l-37.273 6.427 37.338 4.668c-.01-3.564-.03-7.294-.064-11.096zm128.118.823l-30 7.5v133.973h30zm-226.378 16.12l-61.62 10.626v-6.612c-14.426 4.543-27.058 10.895-35.476 17.44-7.943 6.18-11.202 12.364-11.28 14.482-.04 1.06-.01 1.492 1.292 2.853 1.25 1.307 4.112 3.166 8.813 4.81 79.575 13.055 124.014-7.656 175.34-33.966z"></path>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Nav;
