import style from './Headers.module.css';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { getCategories } from '../services';
import Image from 'next/image';

const Headers = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  const navbarRef = useRef(null)

  const ChangeNavbar = (scrollY) => {
    const navbar = navbarRef.current
    if (scrollY > 50) {
      navbar.classList.remove('active')
      navbar.classList.add('activate')
    } else {
      navbar.classList.remove('activate')
      navbar.classList.add('active')
    }
  }
  const windowOnScroll = () => {
    const { scrollY } = window
    ChangeNavbar(scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', windowOnScroll)
    return () => window.removeEventListener('scroll', windowOnScroll)
  })

  // handleClick
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <>
      <nav className={style.Navbar}>
        <div className={style.NavContainer}>
          <Link href="/">
            <h2 className={style.Navbrand}>
              U
              <div className={style.Logo}>
                <Image width={20} height={20} src="/r.png" alt="Logo" />
              </div>
              BAND.
            </h2>
          </Link>
          <ul className={style.Navlist}>
            <li className={style.Navlink}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={style.Navlink}>
              <Link href="/About">
                <a>About</a>
              </Link>
            </li>
            <li className={style.Navlink}>
              <Link href="/Contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div ref={navbarRef} className="navbar active">
          <button
            onClick={() => setClick(!click)}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            className='menu'
          >
            {!click ? (
              <svg
                className="block h-6 w-6"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="close block h-6 w-6"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <div className="nav_Link">
            <Image width={35} height={35} src="/r.png" alt="Logo" />

            <div
              onClick={handleClick}
              className={click ? 'navList open' : 'navList'}
            >
              <ul>
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/category/${category.slug}`}
                      onClick={closeMenu}
                    >
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <input type="text" placeholder="Search ..." className="search" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Headers
