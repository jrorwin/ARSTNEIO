import { Menu, Transition } from '@headlessui/react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-5 py-1 relative z-50">
      <Link to="/" className="text-2xl tracking-[.25em] font-['Oswald'] z-50">
        ARSTNEIO
      </Link>
      <Menu as="div">
        <Menu.Button
          className="hamburger hamburger--squeeze relative z-50"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </Menu.Button>
        <Transition
          enter="sm:transition sm:duration-100 ease-out"
          enterFrom="sm:transform sm:scale-95 opacity-0"
          enterTo="sm:transform sm:scale-100 opacity-100"
          leave="sm:transition duration-75 ease-out"
          leaveFrom="sm:transform sm:scale-100 opacity-100"
          leaveTo="sm:transform sm:scale-95 opacity-0"
        >
          <Menu.Items className="absolute left-0 sm:left-auto sm:right-0 top-0 sm:-top-2 pt-20 sm:pt-1 w-full min-h-screen sm:min-h-fit sm:w-56 bg-neutral-200 sm:bg-neutral-50 sm:shadow-md p-1 sm:rounded-xl">
            {/* TODO: React Router needs to be integrated */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`transition ease-in-out ${
                    active
                      ? 'bg-neutral-700 text-neutral-50'
                      : ' text-neutral-700'
                  } px-5 py-3 rounded-xl w-full flex items-center`}
                  to="/games"
                >
                  <span
                    className="material-symbols-outlined mr-3 text-xl"
                    style={{
                      fontVariationSettings:
                        "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
                    }}
                  >
                    sports_esports
                  </span>
                  <span className="font-bold">Games</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`transition ease-in-out ${
                    active
                      ? 'bg-neutral-700 text-neutral-50'
                      : ' text-neutral-700'
                  } px-5 py-3 rounded-xl w-full flex items-center`}
                  to="/about"
                >
                  <span
                    className="material-symbols-outlined mr-3  text-xl"
                    style={{
                      fontVariationSettings:
                        "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
                    }}
                  >
                    info
                  </span>
                  <span className="font-bold">About</span>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}

export default Navbar;
