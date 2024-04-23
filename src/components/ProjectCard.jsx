import Link from 'next/link';
import React from 'react';

function ProjectCard(props) {
  return (
    <div className="w-full max-w-[570px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] shadow-lg shadow-gray-300">
      <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">{props.title}</h3>
      <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
      <p className="text-gray-400 mb-10 text-base leading-relaxed">{props.description}</p>
      <div className="flex flex-wrap gap-3 my-5">
                <h3 className="text-gray-700 text-2xl ">Domain: {props.domain} </h3>
              </div>
      <div className="flex flex-wrap gap-3">
        <Link href={props.link1} className="block w-full rounded-lg border border-gray-700 p-3 text-center text-base font-medium transition bg-blue-200 hover:border-blue-200 hover:bg-blue-600 text-slate-700">{props.button}</Link>
        <Link href={props.link2} className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">Source Code</Link>  
      </div>
    </div>
  );
}

export default ProjectCard;
