import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Shambalink</h3>
            <p className="text-sm text-gray-300">
              Shambalink is a platform dedicated to empowering farmers,
              connecting communities, and promoting sustainable agriculture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A4.202 4.202 0 0112 19.868a8.23 8.23 0 01-5.032 1.75c-.324 0-.648-.018-.972-.053z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.259 0-3.667.014-4.947.072-2.905.133-4.164 1.457-4.297 4.297-.057 1.28-.072 1.689-.072 4.947 0 3.259.014 3.668.072 4.947.133 2.905 1.457 4.164 4.297 4.297 1.28.057 1.689.072 4.947.072 3.259 0 3.668-.014 4.947-.072 2.905-.133 4.164-1.457 4.297-4.297.057-1.28.072-1.689.072-4.947 0-3.259-.014-3.667-.072-4.947-.133-2.905-1.457-4.164-4.297-4.297-1.28-.057-1.689-.072-4.947-.072zm0 3.204a4.536 4.536 0 100 9.072 4.536 4.536 0 000-9.072zm0 7.507a2.93 2.93 0 110-5.86 2.93 2.93 0 010 5.86zm6.199-7.507a1.062 1.062 0 100 2.124 1.062 1.062 0 000-2.124z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; 2023 Shambalink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
