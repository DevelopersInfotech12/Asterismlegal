"use client"
import React, { useState, useEffect } from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BungalowIcon from '@mui/icons-material/Bungalow';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const router = useRouter();
  

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // const closeDropdown = () => {
  //   setIsDropdownVisible(false);
  // };

  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust this threshold as needed
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateToPage = (href) => {
    router.push(href);
    // closeDropdown(); 
  };

  return (
    <div className="top-12 absolute text-white">
      
<div className=''>
       
<div className={`top-12 absolute text-white ${isHeaderFixed ? 'fixed-header background-change' : 'fixed-header'}`}>
        <div className="filter brightness-200 ml-16 text-overlay mt-8">
          <Link href="/">
          <img src="images/logo.png" alt="" className="w-28 h-20 text-yellow-700" />
          </Link>
        </div>
        <div className="w-100 relative">
          <ul className="flex space-x-8 mt-8 ml-102 text-overlay w-100">
            <Link href="/" className="nav-link text-gray-300 hover:text-white transition ">
              <li>HOME</li>
            </Link>
            <Link href="/aboutus" className="nav-link hover:text-white transition ">
              <li>ABOUT US</li>
            </Link>
            <li className="relative">
              <button className="cursor-pointer focus:outline-none" onClick={toggleDropdown} >
                SERVICES
              </button>
              <ul
                className={`absolute w-24 p-6 mt-2 right-0 left-0 rounded-md space-y-2  bg-white text-black text-sm ${
                  isDropdownVisible ? 'block' : 'hidden'
                } w-48`}
              >
                <li>
                  <Link href="/bankruptcyInsolvencylaw" onClick={() => navigateToPage('/bankruptcyInsolvencylaw')}>BANKRUPTCY & INSOLVENCY LAW</Link>
                </li>
                <li>
                  <Link href="/bankinglaw" onClick={() => navigateToPage('/bankinglaw')}>BANKING LAW</Link>
                </li>
                <li>
                  <Link href="/commercial&corporatelaw" onClick={() => navigateToPage('/commercial&corporatelaw')}>COMMERCIAL & CORPORATE LAW</Link>
                </li>
                <li>
                  <Link href="/civillaw" onClick={() => navigateToPage('/civillaw')}>CIVIL LAW</Link>
                </li>
                <li>
                  <Link href="/consumerlaw" onClick={() => navigateToPage('/consumerlaw')}>CONSUMER LAW</Link>
                </li>
                <li>
                  <Link href="/companieslaw" onClick={() => navigateToPage('/companieslaw')}>COMPANIES LAW</Link>
                </li>
              </ul>
            </li>
            <Link href="/ourblog">
              <li>BLOG</li>
            </Link>
            <Link href="/contactus">
              <li>CONTACT US</li>
            </Link>
          </ul>
        </div>
        <div className="flex mt-6 text-overlay ml-101 w-48">
          <div className="mt-2 mr-2">
            <PhoneIphoneIcon />
          </div>
          <div>
            <h3>CALL US TODAY</h3>
            <h1>+91-9811898418</h1>
          </div>
        </div>
      </div>
      </div>
      <div className="text-overlay mt-80 ml-96">
        <div className="relative text-yellow-500">
          <h1>ASTERISM LEGAL LAW FIRM</h1>
          <hr className="w-16 absolute top-3 left-56 border-yellow-500"></hr>
        </div>
        <div className="w-96 mt-4">
          <h1 className="text-5xl">BEST LAW FIRM SINCE 2005</h1>
        </div>
        <div className="text-xs mt-4 text-justify">
          <p>
            The firm’s clients include large and medium Indian and foreign businesses and multinational corporations. The firm advises and public sector.
          </p>
        </div>
        <div className="mt-4 w-48 h-8 bg-yellow-600 flex rounded-sm">
          <button className="w-36 text-xs ml-2">FREE CONSULTATION</button>
          <ArrowForwardIcon className="mt-1 mt-1" />
        </div>
      </div>

      <div className="ml-36 absolute top-0 left-60">
        <div className="flex-col">
          <div className="text-overlay mt-100 w-96 h-24 bg-white z-0 flex pt-4 relative ml-24">
            <div className="text-slate-500 mr-4 ml-6 mt-2">
              <CorporateFareIcon className="w-10 h-10" />
            </div>
            <div className="text-black mt-2">
              <h1 className="">CORPORATE LAW</h1>
              <p className="text-xs  w-72 text-slate-600 mt-1">
                Our expertise across diverse practice areas and sectors covers varied and nuanced needs. Backed by over 100 years of legal heritage,
              </p>
            </div>
            <div className=" mt-20 absolute left-64 rounded-l-3xl top-8 flex w-28 h-8 pl-4 bg-yellow-500">
              <h3 className="text-xs mt-2">Read More</h3>
              <ArrowForwardIcon className="mt-1 ml-1" />
            </div>
          </div>
          <div className="text-overlay mt-100 w-96 h-24 bg-white z-0 flex pt-4 relative ml-104">
            <div className="text-slate-500 mr-4 ml-6 mt-2">
              <CorporateFareIcon className="w-10 h-10" />
            </div>
            <div className="text-black mt-2">
              <h1>REAL ESTATE LAW</h1>
              <p className="text-xs  w-72 text-slate-600 mt-1">
                Our expertise across diverse practice areas and sectors covers varied and nuanced needs. Backed by over 100 years of legal heritage,
              </p>
            </div>
            <div className=" mt-20 absolute left-64 rounded-l-3xl top-8 flex w-28 h-8 pl-4 bg-yellow-500">
              <h3 className="text-xs mt-2">Read More</h3>
              <ArrowForwardIcon className="mt-1 ml-1" />
            </div>
          </div>
        </div>
        <div className="flex-col mt-105">
          <div className="text-overlay mt-8 w-96
             h-24 bg-white z-0 flex pt-4 relative ml-24">
            <div className="text-slate-500 mr-4 ml-6 mt-2">
              <CorporateFareIcon className="w-10 h-10" />
            </div>
            <div className="text-black mt-2">
              <h1>INSURANCE LAW</h1>
              <p className="text-xs  w-72 text-slate-600 mt-1">
                Our expertise across diverse practice areas and sectors covers varied and nuanced needs. Backed by over 100 years of legal heritage,
              </p>
            </div>
            <div className=" mt-20 absolute left-64 rounded-l-3xl top-8 flex w-28 h-8 pl-4 bg-yellow-500">
              <h3 className="text-xs mt-2">Read More</h3>
              <ArrowForwardIcon className="mt-1 ml-1" />
            </div>
          </div>
          <div className="text-overlay mt-8 w-96 h-24 bg-white z-0 flex pt-4 relative ml-104">
            <div className="text-slate-500 mr-4 ml-6 mt-2">
              <CorporateFareIcon className="w-10 h-10" />
            </div>
            <div className="text-black mt-2">
              <h1>FAMILY LAW</h1>
              <p className="text-xs  w-72 text-slate-600 mt-1">
                Our expertise across diverse practice areas and sectors covers varied and nuanced needs. Backed by over 100 years of legal heritage,
              </p>
            </div>
            <div className=" mt-20 absolute left-64 rounded-l-3xl top-8 flex w-28 h-8 pl-4 bg-yellow-500">
              <h3 className="text-xs mt-2">Read More</h3>
              <ArrowForwardIcon className="mt-1 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
