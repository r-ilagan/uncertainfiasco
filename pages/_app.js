import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';

import '../styles/globals.css';
// make menu unscrollable on mobile
// maybe use another component that covers entire screen

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen md:flex font-serif bg-beige-light">
      <MobileNav />
      <Nav />

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
          <Component {...pageProps} />
        </header>
      </div>
    </div>
  );
}

export default MyApp;
