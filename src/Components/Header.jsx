import React from 'react'
import '../assets/Header.css'

const data = [
  {text:"Ongoing Event"},
  {text:"Subscribed Event"},
  {text:"Hosted Events"},
  {text:"Help & Support"},
  {text:"Settings"}
];

function Header() {
  
  return (
    <nav className='headerContainer bg-black text-white text-bold text-xl hover:shadow-lg'>

        <div className='bg-'><img className='logo w-24' src='https://lirp.cdn-website.com/d053791f/dms3rep/multi/opt/icon-sec-crowd2-640w.png'/> </div>

        {data.map((val) => {
          return <div key={val.text}>
            <div>{val.text}</div>
          </div>
        })}

    </nav>
  )
}

export default Header