import Link from 'next/link'
import React from 'react'

function Footer() {
  return (


    <footer className="bg-white dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">ProjectVault™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
          </li>
          <li>
            <Link href="/project" className="hover:underline me-4 md:me-6">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer