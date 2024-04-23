import Link from 'next/link'
import React from 'react'
import '../static/Dropdown.css'

function Dropdown() {
    return (

        <>


            <div className="paste-button">
                <button className="button1">Filter Domains &nbsp; ▼</button>
                <div className="dropdown-content">
                    {/* <a id="top" href="#">Keep source formatting</a> */}
                    <Link id="top" href="/backend">Backend Web Development</Link>
                    {/* <a id="middle" href="#">Merge formatting</a> */}
                    <Link id="middle" href="/frontend">Frontend Web Development</Link>
                    <Link id="middle" href="/fullstack">Full Stack Web Development</Link>
                    <Link id="middle" href="/database">Database Management Systems</Link>
                    {/* <a id="bottom" href="#">Keep text only</a> */}
                    <Link id="bottom" href="/data">Data Analysis</Link>

                </div>
            </div>
        </>

    )
}

export default Dropdown