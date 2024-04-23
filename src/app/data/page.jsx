import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap mx-4'>
        {/* Row 1 */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <div className="w-full max-w-[570px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] shadow-lg shadow-gray-300">
            <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">Job Harbor</h3>
            <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
            <p className="text-gray-400 mb-10 text-base leading-relaxed">&quot;JobHarbor&quot; is a premier platform dedicated to facilitating career growth and fostering professional connections. With a robust database of job listings, internship programs, and comprehensive career resources, we empower individuals to discover meaningful opportunities aligned with their skills and aspirations.</p>
            <div className="flex flex-wrap gap-3 my-5">
              <h3 className="text-gray-700 text-2xl ">Domain: Full Stack Web Development </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href='https://github.com/akshat-o5/Job-Harbor' className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">Source Code</Link>
            </div>
          </div>
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Movie Gallery API" description="Welcome to Movie Gallery API, your go-to source for accessing a vast collection of movies. Seamlessly browse through our extensive catalog, discover movie details, filter by genre, search by title, and explore related movies based on cast and genre." link1='https://documenter.getpostman.com/view/23129267/2sA2xmTVrx' link2='https://github.com/akshat-o5/Movie-Gallery-API' button="API Documentation" domain='Backend Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="NextGen Solutions" description="Welcome to NexGen Solutions, where innovation meets efficiency to transform your business operations. As a leading provider of corporate services, we specialize in delivering tailored solutions designed to propel your company towards success in today's dynamic market landscape." link1='https://nex-gen-solutions.vercel.app/' link2='https://github.com/akshat-o5/NexGen-Solutions' button="Live Demo" domain='Frontend Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Shopping Complex API" description="The Shopping Complex API provides endpoints to manage shops within a shopping complex. Users can create, read, update, and delete shops, as well as retrieve shops based on their rent payment status. Additionally, the API allows for updating a shop's status and name." link1='https://documenter.getpostman.com/view/23129267/2sA2xnxA7D' link2='https://github.com/akshat-o5/Shopping-Complex-API' button="API Documentation" domain='Backend Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="CA Portfolio" description="Custom CA portfolio website developed as a freelance project. Utilized React.js and Next.js with Bootstrap for optimal website performance; employed HTML, CSS, and JavaScript for front-end design and interactivity." link1='https://ca-anik-portfolio.vercel.app/' link2='https://github.com/akshat-o5/CA-PORTFOLIO' button="Live Demo" domain='Frontend Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Project Vault" description="Project Vault is a private platform dedicated to showcasing my personal projects, providing a curated space where I can exhibit my creations, innovations, and developments. It serves as a repository for my tech endeavors, allowing me to document, share, and reflect on my journey as a developer." link1='abc' link2='https://github.com/akshat-o5/Project-Vault' button="Live Demo" domain='Frontend Web Development' />
        </div> */}
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Cricket Stats Analysis" description="In this project, we analyse the Century dataset of Virat Kohli and predict differnt outcomes and conclusions based upon various patterns. Used python for effective data analysis." link1='https://akshato2.hashnode.dev/exploratory-data-analysis-century-analysis' link2='https://github.com/akshat-o5/Cricket-Stats-Analysis' button="Hashnode Blog" domain='Data Analysis' />
        </div>
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Automart GraphQL API" description="This API provides access to a database of second-hand vehicles, allowing users to query and manipulate vehicle information. It offers endpoints to retrieve vehicle details based on various criteria such as type, brand, price range, and years of usage. Additionally, users can add, update, and delete vehicle entries in the database." link1='https://documenter.getpostman.com/view/23129267/2sA35Bd4zW' link2='https://github.com/akshat-o5/AutoMart-GraphQL-API' button="API Documentation" domain='Backend Web Development' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Literary-Lounge-API" description="At Literary Lounge, we believe in the transformative power of words and the endless possibilities that come with each turn of the page. Immerse yourself in our extensive collection of titles, where you'll discover timeless classics, contemporary bestsellers, and hidden gems waiting to be unearthed." link1='abc' link2='https://github.com/akshat-o5/Literary-Lounge-API' button="API Documentation" domain='Backend Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Static Blog" description="This is a person Blog app Project. This app leverages the power of Next-js for the frontend. It uses renderiing of the markdown data into HTML for showcase of blogs. Also uses Tailwind CSS for styling and enhancement of the UI." link1='https://static-blog-beryl.vercel.app/' link2='https://github.com/akshat-o5/StaticBlog' button="Live Demo" domain='Frontend Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Employee Management System" description="The Employee Management System is a web-based solution for efficient HR administration. It simplifies tasks like adding, updating, and removing employee records, managing departments and roles, and tracking essential details. With user-friendly interfaces, it streamlines data entry and retrieval, offering HR professionals a centralized platform for effective employee management." link1='https://documenter.getpostman.com/view/23129267/2s9YsJBCER' link2='https://github.com/akshat-o5/Employee-Management-System' button="API Documentation" domain='Full Stack Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Authentication API using Django Rest Framework" description="The authentication API, built on Django Rest Framework, leverages custom user models and Simple JWT for streamlined user management and secure access control. With robust features tailored to individual needs, it offers seamless registration, authentication, and token-based authorization, ensuring a reliable and scalable authentication solution for your application. Powered by Django's versatility and the efficiency of Simple JWT, this API simplifies user authentication while prioritizing security and flexibility." link1='https://documenter.getpostman.com/view/23129267/2s9YsKfrUe' link2='https://github.com/akshat-o5/Authentication-API' button="API Documentation" domain='Backend Web Development' />
        </div> */}
        {/* <div className='w-full <ProjectCard />sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Todo App Backend" description="A basic Todo App built with Flask and MySQL. Stay organized and boost your productivity with our intuitive ToDo app! Effortlessly manage tasks, set priorities, and track your progress with a user-friendly interface. Whether you're tackling work projects or personal goals, this app simplifies your day, helping you stay focused on what matters most." link1='https://documenter.getpostman.com/view/23129267/2s9YsKfrw9' link2='https://github.com/akshat-o5/Todo-App-Backend' button="API Documentation" domain='Full Stack Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Personal Portfolio" description="My personal portfolio website, built using HTML, CSS, and JavaScript, is a sleek and interactive platform to showcase my skills and projects. It offers a minimalist yet captivating design, allowing visitors to explore my work and expertise with ease and elegance." link1='https://akshat-o5.github.io/Personal_Portfolio/' link2='https://github.com/akshat-o5/Personal_Portfolio' button="Live Demo" domain='Frontend Web Development' />
        </div> */}
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Digital Library Management System" description="While going through multiple projects of database management systems for libraries, I came up with my personally developed database schema, specially designed for a digital library. I have formulated some new designs such that effective data storage and data retrieval process takes place." link1='https://akshato2.hashnode.dev/digital-library-management-system' link2='https://github.com/akshat-o5/Digital-Library-Management-System' button="Hashnode Blog" domain='Database Management System' />
        </div> */}
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <div className="w-full max-w-[570px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] shadow-lg shadow-gray-300">
            <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">Netflix Dataset Analysis</h3>
            <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
            <p className="text-gray-400 mb-10 text-base leading-relaxed">Explore the vast world of Netflix data with Python for insightful data analysis. Uncover trends, patterns, and viewer preferences, leveraging powerful Python libraries to extract valuable insights and drive informed decision-making. Dive deep into viewer behavior, content trends, and performance metrics, unlocking the potential of data-driven strategies in the entertainment industry.</p>
            <div className="flex flex-wrap gap-3 my-5">
              <h3 className="text-gray-700 text-2xl ">Domain: Data Analysis </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href='https://github.com/akshat-o5/Netflix-Dataset-Analysis' className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">Source Code</Link>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Global Terrorism Dataset Analysis" description="This project is a part of the Data Science and Business Analytics Internship at Sparks Foundation. The objective of this project is to perform Exploratory Data Analysis on the Global Terrorism dataset." link1='https://drive.google.com/file/d/1luTU7xBvI7QAGPbQMxEHcgKUi9d6UeP_/view' link2='https://github.com/akshat-o5/Global-Terrorism' button="Link to Dataset" domain='Data Analysis' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Diwali Sales Analysis" description="In this project, we analyze Diwali sales data to predict outcomes and draw conclusions based on patterns. Our goals include enhancing customer experience through data-driven insights and boosting revenue." link1='https://drive.google.com/file/d/1S_bY28PybkgEsiI_8Pj9NJ9cB9d98B7u/view' link2='https://github.com/akshat-o5/Diwali-Sales-Analysis' button="Link to Dataset" domain='Data Analysis' />
        </div>
        {/* <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="Resturant Finder" description="An interactive UI design of a resturant finder website which helps you find a resturant nearest to your location." link1='https://akshat-o5.github.io/Resturant-Finder/' link2='https://github.com/akshat-o5/Resturant-Finder' button="Live Demo" domain='Frontend Web Development' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-4'>
          <ProjectCard title="CalcuMate" description="Your own personalized calculator with an attractive User Interface." link1='https://akshat-o5.github.io/CalcuMate/' link2='https://github.com/akshat-o5/CalcuMate' button="Live Demo" domain='Frontend Web Development' />
        </div> */}
      </div>
    </div>


        <div className="flex justify-center my-10">
          <Link href='/project' ><button className="block w-full rounded-lg border border-gray-700 p-3 text-center text-base font-medium transition bg-blue-200 hover:border-vilet-200 hover:bg-violet-600 text-black">Back to All Projects</button></Link>
        </div>
        </>
  )
}

export default page