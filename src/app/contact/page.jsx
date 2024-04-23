import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';


function page() {
  return (
    <>



      {/* Contact Section Starts */}
      <div className='my-5'>
              <section className="bg-blue-50 dark:bg-black" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-purple-800 dark:text-purple-800">
                Contact
              </p>
              <h2
                className="font-heading mb-4 font-bold tracking-tight text-purple-800 dark:text-purple-800 text-3xl sm:text-5xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                We&apos;re here to answer your questions, address your concerns, and explore how NexGen Solutions can help elevate your business. Reach out to us using the information below, and let&apos;s start the conversation.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path
                          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                        </path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Social Handles
                      </h3>
                      <div className='flex' >
                      <Link href="https://www.linkedin.com/in/akshat-gupta-4414ab22a/" className="mx-2 text-xl hover:text-blue-400"><FaLinkedin /></Link>
                      <Link href="#" className="mx-2 text-xl hover:text-pink-400"><FaInstagram /></Link>
                      </div>
                      
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path
                          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                        </path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9170756181</p>
                      <p className="text-gray-600 dark:text-slate-400">Mail: a.akshat903@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Contact Section Ends */}



    </>
  )
}

export default page