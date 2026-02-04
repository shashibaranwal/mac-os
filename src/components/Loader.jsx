import React from 'react'
import './loader.scss'

const Loader = () => {
  return (
    <div className='loader'>
        <div className="spinner">
            <img src="/navbar-icons/apple.svg" alt="apple-logo" />
            <div className="loader-bar"></div>
        </div>
    </div>
  )
}

export default Loader