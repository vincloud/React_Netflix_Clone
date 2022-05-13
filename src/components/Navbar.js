import React from 'react'
import './Nav.css'
import { useState, useEffect } from 'react'

function Navbar() {
    const [show,handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }
            else {
                handleShow(false)
            }
        })
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="netflix logo" />
        </div>
    )
}

export default Navbar
