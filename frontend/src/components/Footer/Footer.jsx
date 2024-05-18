// components/Footer/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold text-gray-900">Sarkari Res</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">Github</a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition duration-300">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ml-5 transition duration-300">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 4.963-2.521 17.408 17.408 0 0 0-3.876-11.662ZM7.02 11.006c-1.006-.047-1.956-.507-2.624-1.254-.497-.543-.882-1.2-1.13-1.9a6.732 6.732 0 0 1 1.013-5.95c.477.823 1.004 1.618 1.578 2.378a27.485 27.485 0 0 0 3.006 3.25c.248.227.508.441.78.64a4.92 4.92 0 0 1-2.624 2.836Zm7.962 0c-.785.37-1.658.574-2.534.595a5.457 5.457 0 0 1-2.35-.595 5.451 5.451 0 0 1-2.35-.595 6.732 6.732 0 0 1-2.624-1.254c-.497-.543-.882-1.2-1.13-1.9a6.732 6.732 0 0 1 1.013-5.95c.477.823 1.004 1.618 1.578 2.378a27.485 27.485 0 0 0 3.006 3.25c.248.227.508.441.78.64a4.92 4.92 0 0 1-2.624 2.836Z"/>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ml-5 transition duration-300">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path d="M17.316 0H2.685A2.683 2.683 0 0 0 0 2.684V14.32a2.683 2.683 0 0 0 2.684 2.684h14.631A2.683 2.683 0 0 0 20 14.32V2.684A2.683 2.683 0 0 0 17.316 0ZM6.543 12.152V4.865l8.593 3.644-8.593 3.643Z"/>
              </svg>
              <span className="sr-only">YouTube page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
